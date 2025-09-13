// src/hooks/useWizardKeyboard.ts
import { useEffect } from 'react';
interface UseWizardKeyboardProps {
    currentStep: number;
    totalSteps: number;
    isSubmitting: boolean;
    handleNext: () => void;
    handleBack: () => void;
    handleSubmit: () => void;
}

export function useWizardKeyboard({
    currentStep,
    totalSteps,
    isSubmitting,
    handleNext,
    handleBack,
    handleSubmit,
}: UseWizardKeyboardProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (isSubmitting) return;

            switch (e.key) {
                case 'Enter':
                    e.preventDefault();
                    if (currentStep < totalSteps) {
                        handleNext();
                    } else {
                        handleSubmit();
                    }
                    break;

                case 'ArrowLeft':
                    e.preventDefault();
                    if (currentStep > 1) handleBack();
                    break;

                case 'ArrowRight':
                    e.preventDefault();
                    if (currentStep < totalSteps) handleNext();
                    break;

                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [currentStep, totalSteps, isSubmitting, handleNext, handleBack, handleSubmit]);
}
