import { WIZARD_STATUS } from '../../constants/constant';
import { useI18n } from '../../hooks/useI18n';
import { StepIndicators } from './StepIndicators'
import { ProgressBar } from './ProgressBar'
import { User, Home, FileText } from 'lucide-react';

interface StepProgressProps {
    currentStep: number;
    progress: number;
    onStepClick: (step: number) => void;
}


const StepProgress = ({ currentStep, progress, onStepClick }: StepProgressProps) => {

    const { t } = useI18n();
    const formSteps = [
        {
            number: 1,
            title: t('wizard.step1.title'),
            subtitle: t('wizard.step1.subtitle'),
            icon: User,
        },
        {
            number: 2,
            title: t('wizard.step2.title'),
            subtitle: t('wizard.step2.subtitle'),
            icon: Home,
        },
        {
            number: 3,
            title: t('wizard.step3.title'),
            subtitle: t('wizard.step3.subtitle'),
            icon: FileText,
        },
    ];
    const getStepStatus = (stepNumber: number) => {
        if (stepNumber < currentStep) return WIZARD_STATUS.COMPLETED;
        if (stepNumber === currentStep) return WIZARD_STATUS.ACTIVE;
        return WIZARD_STATUS.PENDING;
    };

    const canNavigateToStep = (stepNumber: number) => {
        return stepNumber <= currentStep;
    };

    return (
        <div className="space-y-4">
            <ProgressBar
                value={progress}
            />

            <StepIndicators
                steps={formSteps}
                getStepStatus={getStepStatus}
                canNavigateToStep={canNavigateToStep}
                onStepClick={onStepClick}
            />
        </div>
    );
};

export default StepProgress;