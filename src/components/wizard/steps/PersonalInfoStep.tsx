// src/components/wizard/steps/PersonalInfoStep.tsx
import React from 'react';
import { motion } from 'motion/react';
import { UseFormReturn } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { useI18n } from '../../../contexts/I18nContext';
import { Step1Data } from '../../../lib/zod';
import { genderOptions, locationData, Country, State } from '../../../data/data';

interface PersonalInfoStepProps {
    form: UseFormReturn<Step1Data>;
    selectedCountry: Country | null;
    selectedState: State | null;
    availableStates: State[];
    availableCities: string[];
    handleCountryChange: (countryCode: string) => void;
    handleStateChange: (stateCode: string) => void;
}

export default function PersonalInfoStep({
    form,
    selectedCountry,
    selectedState,
    availableStates,
    availableCities,
    handleCountryChange,
    handleStateChange,
}: PersonalInfoStepProps) {
    const { t } = useI18n();

    return (
        <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <Card>
                <CardHeader>
                    <CardTitle>{t('wizard.step1.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Fields */}
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.first_name')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.last_name')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Phone */}
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.phone')}</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.email')}</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="john@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Gender */}
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.gender')}</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t('form.select_gender')} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {genderOptions.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Date of Birth */}
                            <FormField
                                control={form.control}
                                name="dateOfBirth"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.date_of_birth')}</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* National ID */}
                            <FormField
                                control={form.control}
                                name="nationalId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.national_id')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder="123456789" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Country */}
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.country')}</FormLabel>
                                        <Select
                                            onValueChange={handleCountryChange}
                                            value={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t('form.select_country')} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {locationData.map((country) => (
                                                    <SelectItem key={country.code} value={country.code}>
                                                        {country.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* State */}
                            <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.state')}</FormLabel>
                                        <Select
                                            onValueChange={handleStateChange}
                                            value={field.value}
                                            disabled={!selectedCountry}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder={
                                                            selectedCountry
                                                                ? t('form.select_state')
                                                                : t('form.select_country_first')
                                                        }
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {availableStates.map((state) => (
                                                    <SelectItem key={state.code} value={state.code}>
                                                        {state.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* City */}
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.city')}</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            disabled={!selectedState}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder={
                                                            selectedState
                                                                ? t('form.select_city')
                                                                : t('form.select_state_first')
                                                        }
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {availableCities.map((city) => (
                                                    <SelectItem key={city} value={city}>
                                                        {city}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Address */}
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="md:col-span-2">
                                        <FormLabel>{t('form.address')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder="123 Main Street" {...field} />
                                        </FormControl>
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