// src/hooks/useWizardForm.ts
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Step1Data, step1Schema, Step2Data, step2Schema, Step3Data, step3Schema } from '../lib/zod';

type FormData = Step1Data & Step2Data & Step3Data;

export const useWizardForm = (formData: Partial<FormData>) => {
  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      nationalId: formData.nationalId || '',
      dateOfBirth: formData.dateOfBirth || '',
      gender: formData.gender || '',
      address: formData.address || '',
      country: formData.country || '',
      state: formData.state || '',
      city: formData.city || '',
      phone: formData.phone || '',
      email: formData.email || '',
    },
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      maritalStatus: formData.maritalStatus || '',
      dependents: formData.dependents || '',
      employmentStatus: formData.employmentStatus || '',
      monthlyIncome: formData.monthlyIncome || '',
      housingStatus: formData.housingStatus || '',
    },
  });

  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      financialSituation: formData.financialSituation || '',
      helpNeeded: formData.helpNeeded || '',
      reasonOfApply: formData.reasonOfApply || '',
    },
  });

  const getCurrentForm = (currentStep: number) => {
    switch (currentStep) {
      case 1: return step1Form;
      case 2: return step2Form;
      case 3: return step3Form;
      default: return step1Form;
    }
  };

  return {
    step1Form,
    step2Form,
    step3Form,
    getCurrentForm,
  };
};