// src/components/wizard/ApplicationWizard.tsx - Updated to use Layout
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { useI18n } from '../contexts/I18nContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useLocationData } from '../hooks/useLocationData';
import { useWizardForm } from '../hooks/useWizardForm';
import WizardProgress from '../components/wizard/WizardProgress';
import PersonalInfoStep from '../components/wizard/steps/PersonalInfoStep';
import HouseholdInfoStep from '../components/wizard/steps/HouseholdInfoStep';
import SituationStep from '../components/wizard/steps/SituationStep';
import WizardNavigation from '../components/wizard/WizardNavigation';
import AIAssistant from '../components/AIAssistant';
import { Step1Data, Step2Data, Step3Data } from '../lib/zod';
import { useWizardKeyboard } from '../hooks/useWizardKeyboard';

type FormData = Step1Data & Step2Data & Step3Data;

const STORAGE_KEY = 'application-wizard-data';

export default function ApplicationWizard() {
  const { t } = useI18n();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useLocalStorage<Partial<FormData>>(STORAGE_KEY, {});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiAssistant, setAiAssistant] = useState<{
    isOpen: boolean;
    fieldName: string;
    fieldLabel: string;
  }>({
    isOpen: false,
    fieldName: '',
    fieldLabel: '',
  });

  const locationData = useLocationData();
  const { step1Form, step2Form, step3Form, getCurrentForm } = useWizardForm(formData);
  const [error, setError] = useState<Error | null>(null);

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  // Load saved step on mount
  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) {
      setCurrentStep(Number(savedStep));
    }
  }, []);

  // Initialize location data from saved form data
  useEffect(() => {
    if (formData.country) {
      locationData.initializeFromData(formData.country, formData.state);
    }
  }, [formData.country, formData.state]);

  const saveProgress = () => {
    const currentForm = getCurrentForm(currentStep);
    const currentData = currentForm.getValues();
    const updatedData = { ...formData, ...currentData };
    setFormData(updatedData);
    toast.success('Progress saved');
  };

  const handleNext = async () => {
    const currentForm = getCurrentForm(currentStep);
    const isValid = await currentForm.trigger();

    if (isValid) {
      const currentData = currentForm.getValues();
      const updatedData = { ...formData, ...currentData };
      setFormData(updatedData);

      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
        localStorage.setItem('currentStep', String(currentStep + 1));
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const handleSubmit = async () => {
    const step3Data = step3Form.getValues();
    const finalData = { ...formData, ...step3Data };

    const isStep3Valid = await step3Form.trigger();
    if (!isStep3Valid) return;

    setIsSubmitting(true);
    const loadingToastId = toast.loading('Submitting application...');

    try {
      // Mock API call
      const mockApiCall = () =>
        new Promise<{ success: boolean }>((resolve, reject) => {
          setTimeout(() => {
            // Simulate API error
            const shouldFail = false;
            if (shouldFail) reject(new Error('API error occurred'));
            else resolve({ success: true });
          }, 2000);
        });

      const response = await mockApiCall();

      // Only runs if API succeeds
      if (response.success) {
        toast.success('Application submitted successfully!', { id: loadingToastId });
        setFormData({});
        localStorage.removeItem('currentStep');
        window.location.href = '/';
      }
    } catch (error) {
      console.error('API error:', error);
      toast.error('Failed to submit application. Please try again.', { id: loadingToastId });
      setError(error); // <--- triggers ErrorBoundary via render
    } finally {
      setIsSubmitting(false); // always reset submitting
    }
  };

  if (error) throw error;

  const openAIAssistant = (fieldName: string, fieldLabel: string) => {
    setAiAssistant({
      isOpen: true,
      fieldName,
      fieldLabel,
    });
  };

  const handleAIAccept = (suggestion: string) => {
    const currentForm = getCurrentForm(currentStep);
    currentForm.setValue(aiAssistant.fieldName as any, suggestion);
  };

  // Auto-save on form changes
  useEffect(() => {
    const subscription = getCurrentForm(currentStep).watch(() => {
      const currentData = getCurrentForm(currentStep).getValues();
      const updatedData = { ...formData, ...currentData };
      setFormData(updatedData);
    });

    return () => subscription.unsubscribe();
  }, [currentStep, formData, setFormData]);

  const commonStepProps = {
    formData,
  };

  const locationProps = {
    ...locationData,
    handleCountryChange: (countryCode: string) => {
      locationData.handleCountryChange(countryCode);
      step1Form.setValue('country', countryCode);
      step1Form.setValue('state', '');
      step1Form.setValue('city', '');
    },
    handleStateChange: (stateCode: string) => {
      locationData.handleStateChange(stateCode);
      step1Form.setValue('state', stateCode);
      step1Form.setValue('city', '');
    },
  };
  // useWizardKeyboard({
  //   currentStep,
  //   totalSteps: 3,
  //   isSubmitting,
  //   handleNext,
  //   handleBack,
  //   handleSubmit
  // });


  return (
    <>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-4xl">
        <WizardProgress
          currentStep={currentStep}
          totalSteps={totalSteps}
          progress={progress}
          onStepClick={handleStepClick}
        />

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <PersonalInfoStep
              form={step1Form}
              {...commonStepProps}
              {...locationProps}

            />
          )}
          {currentStep === 2 && (
            <HouseholdInfoStep
              form={step2Form}
              {...commonStepProps}
            />
          )}
          {currentStep === 3 && (
            <SituationStep
              form={step3Form}
              {...commonStepProps}
              openAIAssistant={openAIAssistant}
            />
          )}
        </AnimatePresence>

        <WizardNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          isSubmitting={isSubmitting}
          onBack={handleBack}
          onNext={handleNext}
          onSave={saveProgress}
          onSubmit={handleSubmit}
        />
      </div>

      <AIAssistant
        fieldName={aiAssistant.fieldName}
        fieldLabel={aiAssistant.fieldLabel}
        currentValue={getCurrentForm(currentStep).getValues()[aiAssistant.fieldName as keyof any] || ''}
        onAccept={handleAIAccept}
        isOpen={aiAssistant.isOpen}
        onOpenChange={(open) => setAiAssistant(prev => ({ ...prev, isOpen: open }))}
      />
    </>
  );
}