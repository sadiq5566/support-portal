import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Loader2, Save, Send } from 'lucide-react';
import { Button } from '../../ui/button';
import { useI18n } from '../../../hooks/useI18n';

interface WizardNavigationProps {
    currentStep: number;
    totalSteps: number;
    isSubmitting: boolean;
    onBack: () => void;
    onNext: () => void;
    onSave: () => void;
    onSubmit: () => void;
}

export default function WizardNavigation({
    currentStep,
    totalSteps,
    isSubmitting,
    onBack,
    onNext,
    onSave,
    onSubmit,
}: WizardNavigationProps) {
    const { t } = useI18n();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8"
            role="group"
            aria-label="Wizard navigation controls"
        >
            <div className="flex gap-2">
                {currentStep > 1 && (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onBack}
                        aria-label="Go to previous step"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t('wizard.back')}
                    </Button>
                )}

                <Button
                    type="button"
                    variant="outline"
                    onClick={onSave}
                    aria-label="Save progress and continue later"
                >
                    <Save className="mr-2 h-4 w-4" />
                    {t('wizard.save_continue_later')}
                </Button>
            </div>

            <div>
                {currentStep < totalSteps ? (
                    <Button
                        type="button"
                        onClick={onNext}
                        aria-label="Continue to next step"
                    >
                        {t('wizard.continue')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                ) : (
                    <Button
                        type="button"
                        onClick={onSubmit}
                        className="bg-green-600 hover:bg-green-700"
                        disabled={isSubmitting}
                        aria-disabled={isSubmitting}
                        aria-label="Submit application"
                    >
                        {isSubmitting ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Send className="mr-2 h-4 w-4" />
                        )}
                        {t('wizard.submit')}
                    </Button>
                )}
            </div>
        </motion.div>
    );
}