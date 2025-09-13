// src/components/wizard/steps/SituationStep.tsx
import React from 'react';
import { motion } from 'motion/react';
import { UseFormReturn } from 'react-hook-form';
import { Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { useI18n } from '../../../contexts/I18nContext';
import { Step3Data } from '../../../lib/zod';

interface SituationStepProps {
    form: UseFormReturn<Step3Data>;
    formData: any;
    openAIAssistant: (fieldName: string, fieldLabel: string) => void;
}

export default function SituationStep({ form, formData, openAIAssistant }: SituationStepProps) {
    const { t } = useI18n();

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
                            <FormField
                                control={form.control}
                                name="financialSituation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.financial_situation')}</FormLabel>
                                        <FormDescription>
                                            Please describe your current financial situation and circumstances
                                        </FormDescription>
                                        <div className="relative">
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Describe your financial situation..."
                                                    className="min-h-[120px] pr-12"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute top-2 right-2 h-8 w-8"
                                                onClick={() => openAIAssistant(
                                                    'financialSituation',
                                                    `I am currently ${formData.employmentStatus} with a monthly income of ${formData.monthlyIncome} dollars. I am ${formData.maritalStatus}, live in ${formData.housingStatus}, and have ${formData.dependents} dependents. Please summarize my current financial situation in a clear, professional way as if I am describing it for a support application.`
                                                )}
                                            >
                                                <Sparkles className="h-4 w-4 text-blue-500" />
                                            </Button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="helpNeeded"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.help_needed')}</FormLabel>
                                        <FormDescription>
                                            What specific type of assistance are you seeking?
                                        </FormDescription>
                                        <div className="relative">
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Describe what help you need..."
                                                    className="min-h-[100px] pr-12"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute top-2 right-2 h-8 w-8"
                                                onClick={() => openAIAssistant(
                                                    'helpNeeded',
                                                    `I am ${formData.employmentStatus} with a monthly income of ${formData.monthlyIncome} dollars. I am ${formData.maritalStatus}, living in ${formData.housingStatus}, and responsible for ${formData.dependents} dependents. Based on this, please write a professional summary to describe which help, i really need for a support application, in my own voice.`
                                                )}
                                            >
                                                <Sparkles className="h-4 w-4 text-blue-500" />
                                            </Button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="reasonOfApply"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.reasonOfApply')}</FormLabel>
                                        <FormDescription>
                                            What is your reason for applying?
                                        </FormDescription>
                                        <div className="relative">
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Reason for Applying..."
                                                    className="min-h-[80px] pr-12"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute top-2 right-2 h-8 w-8"
                                                onClick={() => openAIAssistant(
                                                    'reasonOfApply',
                                                    `My situation — ${formData.employmentStatus} job, earning ${formData.monthlyIncome} dollars monthly, ${formData.maritalStatus}, living in ${formData.housingStatus}, and caring for ${formData.dependents} dependents — please write a concise, professional statement explaining why I am applying for support, in my own voice.`
                                                )}
                                            >
                                                <Sparkles className="h-4 w-4 text-blue-500" />
                                            </Button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </Form>
                </CardContent>
            </Card>
        </motion.div>
    );
}