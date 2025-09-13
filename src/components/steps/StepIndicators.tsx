import { ConnectionLine } from './ConnectionLine';
import { StepItem } from './StepItem';

interface StepIndicatorsProps {
    steps: Array<{
        number: number;
        title: string;
        subtitle: string;
        icon: React.ComponentType<{ className?: string }>;
    }>;
    currentStep: number;
    getStepStatus: (stepNumber: number) => 'completed' | 'active' | 'pending';
    canNavigateToStep: (stepNumber: number) => boolean;
    onStepClick: (stepNumber: number) => void;
}

export const StepIndicators = ({
    steps,
    currentStep,
    getStepStatus,
    canNavigateToStep,
    onStepClick
}: StepIndicatorsProps) => {
    return (
        <div className="flex items-center justify-between relative">
            {steps.map((step) => {
                const status = getStepStatus(step.number);
                const canNavigate = canNavigateToStep(step.number);

                return (
                    <StepItem
                        key={step.number}
                        step={step}
                        status={status}
                        canNavigate={canNavigate}
                        onClick={onStepClick}
                    />
                );
            })}
        </div>
    );
};