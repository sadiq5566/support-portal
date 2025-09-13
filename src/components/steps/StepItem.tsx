import { StepCircle } from './StepCircle';
import { StepInfo } from './StepInfo';

interface StepItemProps {
    step: {
        number: number;
        title: string;
        subtitle: string;
        icon: React.ComponentType<{ className?: string }>;
    };
    key?: number,
    status: 'completed' | 'active' | 'pending';
    canNavigate: boolean;
    onClick: (stepNumber: number) => void;
}

export const StepItem = ({ step, status, canNavigate, onClick }: StepItemProps) => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <StepCircle
                stepNumber={step.number}
                icon={step.icon}
                status={status}
                canNavigate={canNavigate}
                onClick={() => onClick(step.number)}
            />
            <StepInfo
                title={step.title}
                subtitle={step.subtitle}
                status={status}
            />
        </div>
    );
};