import { Progress } from "../../ui/progress";


interface ProgressBarProps {
    value: number;
}

export const ProgressBar = ({ value }: ProgressBarProps) => {
    return (
        <div className="space-y-2">
            <Progress value={value} className="h-2" />
        </div>
    );
};