// src/components/wizard/steps/HouseholdInfoStep.tsx
import React from 'react';
import { motion } from 'motion/react';
import { UseFormReturn } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { useI18n } from '../../../contexts/I18nContext';
import { Step2Data } from '../../../lib/zod';
import { dependentsOptions, employmentStatusOptions, housingStatusOptions, maritalStatusOptions, monthlyIncomeOptions } from '../../../data/data';

interface HouseholdInfoStepProps {
    form: UseFormReturn<Step2Data>;
}

export default function HouseholdInfoStep({ form }: HouseholdInfoStepProps) {
    const { t } = useI18n();

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
                        Please provide your household and employment information
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <div className="space-y-6">
                            {/* Marital Status */}
                            <FormField
                                control={form.control}
                                name="maritalStatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.marital_status')}</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select marital status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {maritalStatusOptions.map((opt) => (
                                                    <SelectItem key={opt.value} value={opt.value}>
                                                        {opt.label}
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
                                name="dependents"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.dependents')}</FormLabel>
                                        <FormDescription>
                                            Number of people who depend on you financially
                                        </FormDescription>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select number of dependents" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {dependentsOptions.map((opt) => (
                                                    <SelectItem key={opt.value} value={opt.value}>
                                                        {opt.label}
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
                                name="employmentStatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.employment_status')}</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select employment status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {employmentStatusOptions.map((opt) => (
                                                    <SelectItem key={opt.value} value={opt.value}>
                                                        {opt.label}
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
                                name="monthlyIncome"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.monthly_income')}</FormLabel>
                                        <FormDescription>
                                            Total gross monthly household income before taxes
                                        </FormDescription>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select monthly income range" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {monthlyIncomeOptions.map((opt) => (
                                                    <SelectItem key={opt.value} value={opt.value}>
                                                        {opt.label}
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
                                name="housingStatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.housing_status')}</FormLabel>
                                        <FormDescription>
                                            Your current living situation
                                        </FormDescription>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select housing status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {housingStatusOptions.map((opt) => (
                                                    <SelectItem key={opt.value} value={opt.value}>
                                                        {opt.label}
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