import { z } from 'zod';
import { TFunction } from '../contexts/I18nContext';

export const getStep1Schema = (t: TFunction) => z.object({
  firstName: z.string().min(2, t('validation.firstNameMin')),
  lastName: z.string().min(2, t('validation.lastNameMin')),
  nationalId: z.string().min(5, t('validation.nationalIdMin')),
  dateOfBirth: z
    .string()
    .min(1, t('validation.dateOfBirthRequired'))
    .refine(val => {
      const selectedDate = new Date(val);
      const today = new Date();
      selectedDate.setHours(0,0,0,0);
      today.setHours(0,0,0,0);
      return selectedDate <= today;
    }, t('validation.dateOfBirthFuture')),
  gender: z.string().min(1, t('validation.genderRequired')),
  address: z.string().min(5, t('validation.addressMin')),
  country: z.string().min(1, t('validation.countryRequired')),
  state: z.string().min(1, t('validation.stateRequired')),
  city: z.string().min(1, t('validation.cityRequired')),
  phone: z.string()
    .min(10, t('validation.phoneMin'))
    .regex(/^\+?[0-9\s\-\(\)]{10,20}$/, t('validation.phoneInvalidChars')),
  email: z.string().email(t('validation.emailInvalid')),
});

export const getStep2Schema = (t: TFunction) => z.object({
  maritalStatus: z.string().min(1, t('validation.maritalStatusRequired')),
  dependents: z.string().min(1, t('validation.dependentsRequired')),
  employmentStatus: z.string().min(1, t('validation.employmentStatusRequired')),
  monthlyIncome: z.string().min(1, t('validation.monthlyIncomeRequired')),
  housingStatus: z.string().min(1, t('validation.housingStatusRequired')),
});

export const getStep3Schema = (t: TFunction) => z.object({
  financialSituation: z.string({ required_error: t('validation.required') })
    .min(20, t('validation.financialSituationMin'))
    .max(500, t('validation.financialSituationMax')),
  helpNeeded: z.string({ required_error: t('validation.required') })
    .min(20, t('validation.helpNeededMin'))
    .max(500, t('validation.helpNeededMax')),
  reasonOfApply: z.string({ required_error: t('validation.required') })
    .min(20, t('validation.reasonOfApplyMin'))
    .max(500, t('validation.reasonOfApplyMax')),
});

export type Step1Data = z.infer<ReturnType<typeof getStep1Schema>>;
export type Step2Data = z.infer<ReturnType<typeof getStep2Schema>>;
export type Step3Data = z.infer<ReturnType<typeof getStep3Schema>>;
