import { cn } from "../ui/utils";


interface StepInfoProps {
    title: string;
    subtitle: string;
    status: 'completed' | 'active' | 'pending';
}

export const StepInfo = ({ title, subtitle, status }: StepInfoProps) => {
    return (
        <div className="text-center space-y-1 min-w-0">
            <div
                className={cn(
                    "font-medium text-sm transition-colors duration-200",
                    status === 'active' && "text-primary font-semibold",
                    status === 'completed' && "text-foreground",
                    status === 'pending' && "text-muted-foreground"
                )}
            >
                {title}
            </div>
            <div
                className={cn(
                    "text-xs transition-colors duration-200",
                    status === 'active' && "text-primary/80",
                    status === 'completed' && "text-muted-foreground",
                    status === 'pending' && "text-muted-foreground/60"
                )}
            >
                {subtitle}
            </div>
        </div>
    );
};