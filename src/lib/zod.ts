import { z } from 'zod';

export const step1Schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  nationalId: z.string().min(5, 'National ID must be at least 5 characters'),
  dateOfBirth: z
    .string()
    .min(1, 'Date of birth is required')
    .refine((val) => {
      const selectedDate = new Date(val);
      const today = new Date();
      // remove time part for accurate comparison
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);
      return selectedDate <= today;
    }, 'Date of birth cannot be in the future'),
  gender: z.string().min(1, 'Please select your gender'),
  address: z.string().min(5, 'Please enter a complete address'),
  country: z.string().min(1, 'Please select a country'),
  state: z.string().min(1, 'Please select a state'),
  city: z.string().min(1, 'Please select a city'),
  phone: z
  .string()
  .min(10, 'Please enter a valid phone number')
  .regex(
    /^\+?[0-9\s\-\(\)]{10,20}$/,
    'Please enter a valid phone number'
  ),
   email: z.string().email('Please enter a valid email address'),
});


export const step2Schema = z.object({
  maritalStatus: z.string().min(1, 'Marital status is required'),
  dependents: z.string().min(1, 'Number of dependents is required'),
  employmentStatus: z.string().min(1, 'Employment status is required'),
  monthlyIncome: z.string().min(1, 'Monthly income is required'),
  housingStatus: z.string().min(1, 'Housing status is required'),
});

export const step3Schema = z.object({
  financialSituation: z.string().min(50, 'Please provide at least 50 characters describing your situation'),
  helpNeeded: z.string().min(20, 'Please describe what help you need'),
  reasonOfApply: z.string().min(20, 'Please tell us why you are applying'),
});


export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;