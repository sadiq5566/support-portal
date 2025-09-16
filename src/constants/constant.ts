export const STORAGE_KEY = 'application-wizard-data';
export const LOCAL_STEP_KEY = 'currentStep';

export const TOTAL_STEPS = 3;

export const TOAST_MESSAGES = {
  progressSaved: 'toast.progressSaved',
  submitting: 'toast.submitting',
  submitSuccess: 'toast.submitSuccess',
  submitError: 'toast.submitError',
  apiError: 'toast.apiError',
  suggestionAccepted: 'suggestion.accepted',

};
export const FORM_FIELDS = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  NATIONAL_ID: 'nationalId',
  DATE_OF_BIRTH: 'dateOfBirth',
  GENDER: 'gender',
  ADDRESS: 'address',
  COUNTRY: 'country',
  STATE: 'state',
  CITY: 'city',
  PHONE: 'phone',
  EMAIL: 'email',
  MARITAL_STATUS: 'maritalStatus',
  DEPENDENTS: 'dependents',
  EMPLOYMENT_STATUS: 'employmentStatus',
  MONTHLY_INCOME: 'monthlyIncome',
  HOUSING_STATUS: 'housingStatus',
  FINANCIAL_SITUATION: 'financialSituation',
  HELP_NEEDED: 'helpNeeded',
  REASON_OF_APPLY: 'reasonOfApply',
} as const;
export const AI_ASSISTANT_DEFAULTS = {
  isOpen: false,
  fieldName: '',
  fieldValue: '',
  fieldLabel: '',
  customQuestion: '',
};

export const WIZARD_STEPS = {
  PERSONAL_INFO: 1,
  HOUSEHOLD_INFO: 2,
  SITUATION: 3,
} as const;

export const WIZARD_STATUS = {
  COMPLETED: 'completed',
  ACTIVE: 'active',
  PENDING: 'pending',
} as const;

export const MOCK_API_CONFIG = {
  delay: 2000,
  shouldFail: false,
};
export const ERROR_TYPES = {
  STORAGE: 'storage',
  API: 'api',
  SERVER: 'server',
  NETWORK: 'network',
  GENERIC: 'generic',
} as const;
export type ErrorType = (typeof ERROR_TYPES)[keyof typeof ERROR_TYPES];
