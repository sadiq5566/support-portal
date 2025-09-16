import { cn } from "../../../utils/utils";
import { WIZARD_STATUS } from "../../../constants/constant";

interface StepInfoProps {
    title: string;
    subtitle: string;
    status: typeof WIZARD_STATUS[keyof typeof WIZARD_STATUS];
}

export const StepInfo = ({ title, subtitle, status }: StepInfoProps) => {
    return (
        <div className="text-center space-y-1 min-w-0">
            <div
                className={cn(
                    "font-medium text-sm transition-colors duration-200",
                    status === WIZARD_STATUS.ACTIVE && "text-primary font-semibold",
                    status === WIZARD_STATUS.COMPLETED && "text-foreground",
                    status === WIZARD_STATUS.PENDING && "text-muted-foreground"
                )}
            >
                {title}
            </div>
            <div
                className={cn(
                    "text-xs transition-colors duration-200",
                    status === WIZARD_STATUS.ACTIVE && "text-primary/80",
                    status === WIZARD_STATUS.COMPLETED && "text-muted-foreground",
                    status === WIZARD_STATUS.PENDING && "text-muted-foreground/60"
                )}
            >
                {subtitle}
            </div>
        </div>
    );
};
