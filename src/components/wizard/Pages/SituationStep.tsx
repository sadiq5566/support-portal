import { motion } from 'motion/react';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';
import { Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { useI18n } from '../../../hooks/useI18n';
import { Step3Data } from '../../../lib/zod';
import { FORM_FIELDS } from '../../../constants/constant';

interface SituationStepProps {
    form: UseFormReturn<Step3Data>;
    formData: any;
    openAIAssistant: (fieldName: string, fieldValue: string, fieldLabel: string, openAIAssistant: string) => void;
}

export default function SituationStep({ form, formData, openAIAssistant }: SituationStepProps) {
    const { t } = useI18n();

    const renderTextareaField = (
        fieldName: keyof Step3Data,
        labelKey: string,
        descriptionKey: string,
        placeholderKey: string,
        promptKey: string
    ) => {
        return <FormField
            control={form.control}
            name={fieldName}
            render={({ field }: { field: ControllerRenderProps<Step3Data> }) => (
                <FormItem>
                    <FormLabel>{t(labelKey)}</FormLabel>
                    <FormDescription>{t(descriptionKey)}</FormDescription>
                    <div className="relative">
                        <FormControl>
                            <Textarea
                                placeholder={t(placeholderKey)}
                                className="min-h-[100px] pr-12"
                                {...field}
                            />
                        </FormControl>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8"
                            onClick={() =>
                                openAIAssistant(
                                    fieldName,
                                    field.value,
                                    t(labelKey),
                                    t(promptKey, {
                                        employmentStatus: formData.employmentStatus,
                                        monthlyIncome: formData.monthlyIncome,
                                        maritalStatus: formData.maritalStatus,
                                        housingStatus: formData.housingStatus,
                                        dependents: formData.dependents,
                                    })
                                )
                            }
                        >
                            <Sparkles className="h-4 w-4 text-blue-500" />
                        </Button>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />


    }

    return (
        <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <Card>
                <CardHeader>
                    <CardTitle>{t('wizard.step3.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <div className="space-y-6">
                            {renderTextareaField(
                                FORM_FIELDS.FINANCIAL_SITUATION,
                                'form.financial_situation',
                                'wizard.step3.financial_situation',
                                'placeholder.financialSituation',
                                'wizard.financial_summary_prompt'
                            )}
                            {renderTextareaField(
                                FORM_FIELDS.HELP_NEEDED,
                                'form.help_needed',
                                'wizard.step3.assistance_type',
                                'placeholder.helpNeeded',
                                'wizard.help_needed'
                            )}
                            {renderTextareaField(
                                FORM_FIELDS.REASON_OF_APPLY,
                                'form.reasonOfApply',
                                'wizard.step3.reason_for_applying',
                                'placeholder.reasonOfApply',
                                'wizard.reason_of_apply'
                            )}
                        </div>
                    </Form>
                </CardContent>
            </Card>
        </motion.div>
    );
}
