import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  name: string;
  email: string;
  message: string;
  submitted: boolean;
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
  submitted: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: string }>
    ) => {
      const { field, value } = action.payload;
      (state[field] as string) = value;
    },
    submitForm: (state) => {
      state.submitted = true;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, submitForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
