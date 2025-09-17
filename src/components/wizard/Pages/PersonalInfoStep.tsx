import { useState } from 'react';
import { motion } from 'motion/react';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { useI18n } from '../../../hooks/useI18n';
import { Step1Data } from '../../../lib/zod';
import { FORM_FIELDS } from '../../../constants/constant';

interface PersonalInfoStepProps {
    form: UseFormReturn<Step1Data>;
}

export default function PersonalInfoStep({ form }: PersonalInfoStepProps) {
    const { t } = useI18n();

    // Gender options from i18n
    const genderOptions = [
        { value: 'male', label: t('options.gender.male') },
        { value: 'female', label: t('options.gender.female') },
        { value: 'other', label: t('options.gender.other') },
        { value: 'preferNotToSay', label: t('options.gender.preferNotToSay') },
    ];

    type Country = {
        code: string;
        name: string;
        states: { code: string; name: string; cities: string[] }[];
    };

    const countries = t('options.countries', { returnObjects: true } as any) as unknown as Country[];

    // Local state for country, state, and city selections
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [selectedState, setSelectedState] = useState<string | null>(null);
    const [states, setStates] = useState<{ code: string; name: string; cities: string[] }[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    // Handle country change
    const onCountryChange = (countryCode: string) => {
        setSelectedCountry(countryCode);
        setSelectedState(null);
        const countryObj = countries.find(c => c.code === countryCode);
        setStates(countryObj?.states || []);
        setCities([]);
        form.setValue(FORM_FIELDS.COUNTRY, countryCode);
        form.setValue(FORM_FIELDS.STATE, '');
        form.setValue(FORM_FIELDS.CITY, '');
    };

    // Handle state change
    const onStateChange = (stateCode: string) => {
        setSelectedState(stateCode);
        const stateObj = states.find(s => s.code === stateCode);
        setCities(stateObj?.cities || []);
        form.setValue(FORM_FIELDS.STATE, stateCode);
        form.setValue(FORM_FIELDS.CITY, '');
    };

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
                            {/* First Name */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.FIRST_NAME}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.first_name')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t('placeholder.firstName')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Last Name */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.LAST_NAME}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.last_name')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t('placeholder.lastName')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Phone */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.PHONE}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.phone')}</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder={t('placeholder.phone')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.EMAIL}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.email')}</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder={t('placeholder.email')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Gender */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.GENDER}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.gender')}</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t('placeholder.selectGender')} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {genderOptions.map(option => (
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
                                name={FORM_FIELDS.DATE_OF_BIRTH}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.date_of_birth')}</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="date"
                                                {...field}
                                                max={new Date().toISOString().split('T')[0]}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* National ID */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.NATIONAL_ID}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.national_id')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t('placeholder.nationalId')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Country */}
                            <FormField
                                control={form.control}
                                name={FORM_FIELDS.COUNTRY}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.country')}</FormLabel>
                                        <Select onValueChange={onCountryChange} value={selectedCountry || ''}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t('placeholder.selectCountry')} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {countries.map(country => (
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
                                name={FORM_FIELDS.STATE}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.state')}</FormLabel>
                                        <Select
                                            onValueChange={onStateChange}
                                            value={selectedState || ''}
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
                                                {states.map(state => (
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
                                name={FORM_FIELDS.CITY}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.city')}</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value || ''}
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
                                                {cities.map(city => (
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
                                name={FORM_FIELDS.ADDRESS}
                                render={({ field }: { field: ControllerRenderProps<Step1Data> }) => (
                                    <FormItem className="md:col-span-2">
                                        <FormLabel>{t('form.address')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t('placeholder.address')} {...field} />
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
