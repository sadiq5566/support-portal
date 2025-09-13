import { formSteps } from '../data/data';
import { ProgressBar } from './steps/ProgressBar';
import { StepIndicators } from './steps/StepIndicators';

interface StepProgressProps {
    currentStep: number;
    progress: number;
    onStepClick: (step: number) => void;
}

const StepProgress = ({ currentStep, progress, onStepClick }: StepProgressProps) => {
    const getStepStatus = (stepNumber: number) => {
        if (stepNumber < currentStep) return 'completed';
        if (stepNumber === currentStep) return 'active';
        return 'pending';
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
                currentStep={currentStep}
                getStepStatus={getStepStatus}
                canNavigateToStep={canNavigateToStep}
                onStepClick={onStepClick}
            />
        </div>
    );
};

export default StepProgress;