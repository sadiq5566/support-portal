import { Check } from 'lucide-react';
import { Button } from '../../ui/button';
import { cn } from '../../../utils/utils';


interface StepCircleProps {
    stepNumber: number;
    icon: React.ComponentType<{ className?: string }>;
    status: 'completed' | 'active' | 'pending';
    canNavigate: boolean;
    onClick: () => void;
}

export const StepCircle = ({
    icon: Icon,
    status,
    canNavigate,
    onClick
}: StepCircleProps) => {
    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => canNavigate && onClick()}
            disabled={!canNavigate}
            className={cn(
                "relative h-12 w-12 rounded-full p-0 transition-all duration-200",
                status === 'completed' && "bg-primary text-primary-foreground hover:bg-primary/90",
                status === 'active' && "bg-primary text-primary-foreground shadow-lg scale-110 hover:bg-primary/90",
                status === 'pending' && "bg-muted text-muted-foreground cursor-not-allowed",
                canNavigate && status !== 'pending' && "cursor-pointer hover:scale-105"
            )}
        >
            {status === 'completed' ? (
                <Check className="h-5 w-5" />
            ) : (
                <Icon className="h-5 w-5" />
            )}

            {/* Active Step Ring */}
            {status === 'active' && (
                <div className="absolute -inset-1 rounded-full border-2 border-primary animate-pulse" />
            )}
        </Button>
    );
};