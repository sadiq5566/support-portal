import { motion } from 'motion/react';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { useI18n } from '../../../hooks/useI18n';
import { Step2Data } from '../../../lib/zod';
import { FORM_FIELDS } from '../../../constants/constant';

// Define the structure of your i18n options
interface I18nOptions {
    maritalStatus: Record<string, string>;
    dependents: Record<string, string>;
    employmentStatus: Record<string, string>;
    monthlyIncome: Record<string, string>;
    housingStatus: Record<string, string>;
}

interface HouseholdInfoStepProps {
    form: UseFormReturn<Step2Data>;
}

export default function HouseholdInfoStep({ form }: HouseholdInfoStepProps) {
    const { t } = useI18n();

    // Properly type the options with error handling
    const getOptions = (): I18nOptions => {
        try {
            const rawOptions = t('options', { returnObjects: true } as any);

            // Type assertion with validation
            if (typeof rawOptions === 'object' && rawOptions !== null) {
                return rawOptions as I18nOptions;
            }

            // Fallback in case of issues
            return {
                maritalStatus: {},
                dependents: {},
                employmentStatus: {},
                monthlyIncome: {},
                housingStatus: {}
            };
        } catch (error) {
            console.warn('Failed to load i18n options:', error);
            return {
                maritalStatus: {},
                dependents: {},
                employmentStatus: {},
                monthlyIncome: {},
                housingStatus: {}
            };
        }
    };

    const options = getOptions();

    return (
        <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <Card>
                <CardHeader>
                    <CardTitle>{t('wizard.step2.title')}</CardTitle>
                    <CardDescription>
                        {t("wizard.SecStep.employment_information")}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <div className="space-y-6">
                            {/* Marital Status */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.MARITAL_STATUS}
                                render={({ field }: { field: ControllerRenderProps<Step2Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.marital_status')}</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t("placeholder.selectMaritalStatus")} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.entries(options.maritalStatus).map(([value, label]) => (
                                                    <SelectItem key={value} value={value}>
                                                        {String(label)}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Dependents */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.DEPENDENTS}
                                render={({ field }: { field: ControllerRenderProps<Step2Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.dependents')}</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t("placeholder.selectDependents")} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.entries(options.dependents).map(([value, label]) => (
                                                    <SelectItem key={value} value={value}>
                                                        {String(label)}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Employment Status */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.EMPLOYMENT_STATUS}
                                render={({ field }: { field: ControllerRenderProps<Step2Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.employment_status')}</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t("placeholder.selectEmploymentStatus")} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.entries(options.employmentStatus).map(([value, label]) => (
                                                    <SelectItem key={value} value={value}>
                                                        {String(label)}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Monthly Income */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.MONTHLY_INCOME}
                                render={({ field }: { field: ControllerRenderProps<Step2Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.monthly_income')}</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t("placeholder.selectMonthlyIncome")} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.entries(options.monthlyIncome).map(([value, label]) => (
                                                    <SelectItem key={value} value={value}>
                                                        {String(label)}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Housing Status */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.HOUSING_STATUS}
                                render={({ field }: { field: ControllerRenderProps<Step2Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.housing_status')}</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t("placeholder.selectHousingStatus")} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.entries(options.housingStatus).map(([value, label]) => (
                                                    <SelectItem key={value} value={value}>
                                                        {String(label)}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
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