// src/components/wizard/WizardProgress.tsx
import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../../contexts/I18nContext';
import StepProgress from '../StepProgress';

interface WizardProgressProps {
    currentStep: number;
    totalSteps: number;
    progress: number;
    onStepClick: (step: number) => void;
}

export default function WizardProgress({
    currentStep,
    totalSteps,
    progress,
    onStepClick,
}: WizardProgressProps) {
    const { t } = useI18n();

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
        >
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold mb-2">Support Application</h1>
                <p className="text-muted-foreground">
                    {t('wizard.progress', { current: currentStep, total: totalSteps })}
                </p>
            </div>

            <div className="space-y-2">
                <StepProgress
                    currentStep={currentStep}
                    progress={progress}
                    onStepClick={onStepClick}
                />
            </div>
        </motion.div>
    );
}