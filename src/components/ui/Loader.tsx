import React from 'react';
import { Loader2 } from 'lucide-react';
import { useI18n } from '../../hooks/useI18n';

interface LoaderProps {
    messageKey?: string;
    size?: number;
    color?: string;
}

const Loader: React.FC<LoaderProps> = ({
    messageKey = 'Loading...',
    size = 8,
    color = 'text-blue-500',
}) => {
    const { t } = useI18n();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Loader2 className={`h-${size} w-${size} animate-spin ${color} mb-3`} />
            <p className="text-sm text-muted-foreground">{t(messageKey)}</p>
        </div>
    );
};

export default Loader;
