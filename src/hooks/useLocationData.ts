import { useState, useEffect } from 'react';
import { useI18n } from './useI18n';

type StateType = { code: string; name: string; cities: string[] };
type Country = { code: string; name: string; states: StateType[] };

export function useLocationData(
  initialCountryCode?: string,
  initialStateCode?: string,
  initialCity?: string
) {
  const { t } = useI18n();

  const countries: Country[] = t('options.countries', { returnObjects: true } as any) as unknown as Country[];

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    initialCountryCode ? countries.find(c => c.code === initialCountryCode) || null : null
  );

  const [selectedState, setSelectedState] = useState<StateType | null>(
    initialStateCode && selectedCountry
      ? selectedCountry.states.find(s => s.code === initialStateCode) || null
      : null
  );

  const [selectedCity, setSelectedCity] = useState<string | null>(initialCity || null);

  const [availableStates, setAvailableStates] = useState<StateType[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  // Translate states
  useEffect(() => {
    if (selectedCountry) {
      const statesTranslated = selectedCountry.states.map(state => ({
        ...state,
        name: t(state.name),
      }));
      setAvailableStates(statesTranslated);

      if (selectedState) {
        const updatedState = statesTranslated.find(s => s.code === selectedState.code);
        setSelectedState(updatedState || null);
      }
    } else {
      setAvailableStates([]);
      setSelectedState(null);
    }

    if (!initialCity) setSelectedCity(null);
    setAvailableCities([]);
  }, [selectedCountry, t]);

  // Translate cities
  useEffect(() => {
    if (selectedState) {
      const citiesTranslated = selectedState.cities.map(city => t(city));
      setAvailableCities(citiesTranslated);

      if (initialCity && citiesTranslated.includes(initialCity)) {
        setSelectedCity(initialCity);
      } else {
        setSelectedCity(null);
      }
    } else {
      setAvailableCities([]);
      if (!initialCity) setSelectedCity(null);
    }
  }, [selectedState, t, initialCity]);

  const handleCountryChange = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode) || null;
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (stateCode: string) => {
    if (!selectedCountry) return;
    const state = selectedCountry.states.find(s => s.code === stateCode) || null;
    setSelectedState(state);
    setSelectedCity(null);
  };

  const handleCityChange = (cityName: string) => {
    setSelectedCity(cityName);
  };

  return {
    countries, 
    selectedCountry,
    selectedState,
    selectedCity,
    availableStates,
    availableCities,
    handleCountryChange,
    handleStateChange,
    handleCityChange,
    setSelectedState,
    setSelectedCity,
  };
}
