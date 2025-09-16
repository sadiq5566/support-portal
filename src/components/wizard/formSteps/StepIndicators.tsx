import { WIZARD_STATUS } from '../../../constants/constant';
import { StepItem } from './StepItem';

interface StepIndicatorsProps {
    steps: Array<{
        number: number;
        title: string;
        subtitle: string;
        icon: React.ComponentType<{ className?: string }>;
    }>;
    getStepStatus: (stepNumber: number) => typeof WIZARD_STATUS[keyof typeof WIZARD_STATUS];
    canNavigateToStep: (stepNumber: number) => boolean;
    onStepClick: (stepNumber: number) => void;
}

export const StepIndicators = ({
    steps,
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
                        status={status} // now typed from WIZARD_STATUS
                        canNavigate={canNavigate}
                        onClick={onStepClick}
                    />
                );
            })}
        </div>
    );
};
