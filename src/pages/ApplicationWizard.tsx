import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { useI18n } from '../hooks/useI18n';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useWizardForm } from '../hooks/useWizardForm';
import WizardProgress from '../components/wizard/formSteps/WizardProgress';
import PersonalInfoStep from '../components/wizard/Pages/PersonalInfoStep';
import HouseholdInfoStep from '../components/wizard/Pages/HouseholdInfoStep';
import SituationStep from '../components/wizard/Pages/SituationStep';
import WizardNavigation from '../components/wizard/components/WizardNavigation';
import { Step1Data, Step2Data, Step3Data } from '../lib/zod';
import {
  AI_ASSISTANT_DEFAULTS,
  LOCAL_STEP_KEY,
  MOCK_API_CONFIG,
  STORAGE_KEY,
  TOAST_MESSAGES,
  TOTAL_STEPS,
  WIZARD_STEPS
} from '../constants/constant';
import AIAssistant from '../components/wizard/components/AIAssistant';

type FormData = Step1Data & Step2Data & Step3Data;

export default function ApplicationWizard() {
  const { t } = useI18n();
  const [currentStep, setCurrentStep] = useState<number>(WIZARD_STEPS.PERSONAL_INFO);
  const [formData, setFormData] = useLocalStorage<Partial<FormData>>(STORAGE_KEY, {});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiAssistant, setAiAssistant] = useState(AI_ASSISTANT_DEFAULTS);
  const [error, setError] = useState<Error | null>(null);

  const { step1Form, step2Form, step3Form, getCurrentForm } = useWizardForm(formData);

  const progress = (currentStep / TOTAL_STEPS) * 100;

  // Load saved step
  useEffect(() => {
    const savedStep = localStorage.getItem(LOCAL_STEP_KEY);
    if (savedStep) setCurrentStep(Number(savedStep));
  }, []);


  // Auto-save on form change
  useEffect(() => {
    const currentForm = getCurrentForm(currentStep);
    currentForm.watch((values) => {
      setFormData(prev => ({ ...prev, ...values }));
    });
  }, [currentStep, setFormData]);

  // Helper functions for AI Assistant
  const getCurrentFieldValue = (): string => {
    switch (currentStep) {
      case WIZARD_STEPS.PERSONAL_INFO:
        return step1Form.getValues()[aiAssistant.fieldName as keyof Step1Data];
      case WIZARD_STEPS.HOUSEHOLD_INFO:
        return step2Form.getValues()[aiAssistant.fieldName as keyof Step2Data];
      case WIZARD_STEPS.SITUATION:
        return step3Form.getValues()[aiAssistant?.fieldName as keyof Step3Data]?.trim() || aiAssistant.customQuestion;
      default:
        return '';
    }
  };

  const setCurrentFieldValue = (value: string) => {
    switch (currentStep) {
      case WIZARD_STEPS.PERSONAL_INFO:
        step1Form.setValue(aiAssistant.fieldName as keyof Step1Data, value);
        break;
      case WIZARD_STEPS.HOUSEHOLD_INFO:
        step2Form.setValue(aiAssistant.fieldName as keyof Step2Data, value);
        break;
      case WIZARD_STEPS.SITUATION:
        step3Form.setValue(aiAssistant.fieldName as keyof Step3Data, value);
        break;
    }
  };

  const saveProgress = () => {
    const currentForm = getCurrentForm(currentStep);
    setFormData({ ...formData, ...currentForm.getValues() });
    toast.success(t(TOAST_MESSAGES.progressSaved));
  };

  const handleNext = async () => {
    const currentForm = getCurrentForm(currentStep);
    const isValid = await currentForm.trigger();
    if (!isValid) return;

    setFormData({ ...formData, ...currentForm.getValues() });

    if (currentStep < TOTAL_STEPS) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      localStorage.setItem(LOCAL_STEP_KEY, String(nextStep));
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleStepClick = (step: number) => {
    if (step <= currentStep) setCurrentStep(step);
  };

  const handleSubmit = async () => {
    const isStep3Valid = await step3Form.trigger();
    if (!isStep3Valid) return;

    setIsSubmitting(true);
    const loadingToastId = toast.loading(t(TOAST_MESSAGES.submitting));

    try {
      const mockApiCall = () =>
        new Promise<{ success: boolean }>((resolve, reject) => {
          setTimeout(() => {
            if (MOCK_API_CONFIG.shouldFail) reject(new Error(t(TOAST_MESSAGES.apiError)));
            else resolve({ success: true });
          }, MOCK_API_CONFIG.delay);
        });

      const response = await mockApiCall();
      if (response.success) {
        toast.success(t(TOAST_MESSAGES.submitSuccess), { id: loadingToastId });
        setFormData({});
        localStorage.removeItem(LOCAL_STEP_KEY);
        window.location.href = '/';
      }
    } catch (error: any) {
      toast.error(t(TOAST_MESSAGES.submitError), { id: loadingToastId });
      setError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openAIAssistant = (fieldName: string, fieldLabel: string, customQuestion: string) => {
    setAiAssistant({ isOpen: true, fieldName, fieldLabel, customQuestion });
  };

  const handleAIAccept = (suggestion: string) => {
    setCurrentFieldValue(suggestion);
  };

  const handleCurrentValueChange = (newValue: string) => {
    switch (currentStep) {
      case WIZARD_STEPS.PERSONAL_INFO:
        step1Form.setValue(aiAssistant.fieldName as keyof Step1Data, newValue);
        break;
      case WIZARD_STEPS.HOUSEHOLD_INFO:
        step2Form.setValue(aiAssistant.fieldName as keyof Step2Data, newValue);
        break;
      case WIZARD_STEPS.SITUATION:
        step3Form.setValue(aiAssistant.fieldName as keyof Step3Data, newValue);
        break;
    }

    const currentForm = getCurrentForm(currentStep);
    setFormData(prev => ({
      ...prev,
      ...currentForm.getValues()
    }));
  };


  if (error) throw error;

  return (
    <>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-4xl">
        <WizardProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} progress={progress} onStepClick={handleStepClick} />

        <AnimatePresence mode="wait">
          {currentStep === WIZARD_STEPS.PERSONAL_INFO && (
            <PersonalInfoStep form={step1Form} />
          )}
          {currentStep === WIZARD_STEPS.HOUSEHOLD_INFO && <HouseholdInfoStep form={step2Form} />}
          {currentStep === WIZARD_STEPS.SITUATION && (
            <SituationStep form={step3Form} formData={formData} openAIAssistant={openAIAssistant} />
          )}
        </AnimatePresence>

        <WizardNavigation
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          isSubmitting={isSubmitting}
          onBack={handleBack}
          onNext={handleNext}
          onSave={saveProgress}
          onSubmit={handleSubmit}
        />
      </div>

      <AIAssistant
        fieldLabel={aiAssistant.fieldLabel}
        currentValue={getCurrentFieldValue()}
        onAccept={handleAIAccept}
        onCurrentValueChange={handleCurrentValueChange}
        isOpen={aiAssistant.isOpen}
        onOpenChange={(open) => setAiAssistant(prev => ({ ...prev, isOpen: open }))}
      />
    </>
  );
}
