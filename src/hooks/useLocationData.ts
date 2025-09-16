import { useState } from 'react';
import { Country, State, locationData } from '../constants/data';

export const useLocationData = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [availableStates, setAvailableStates] = useState<State[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  const handleCountryChange = (countryCode: string) => {
    const country = locationData.find(c => c.code === countryCode);
    if (country) {
      setSelectedCountry(country);
      setAvailableStates(country.states);
      setSelectedState(null);
      setAvailableCities([]);
    }
  };

  const handleStateChange = (stateCode: string) => {
    const state = availableStates.find(s => s.code === stateCode);
    if (state) {
      setSelectedState(state);
      setAvailableCities(state.cities);
    }
  };

  const initializeFromData = (countryCode?: string, stateCode?: string) => {
    if (countryCode) {
      const country = locationData.find(c => c.code === countryCode);
      if (country) {
        setSelectedCountry(country);
        setAvailableStates(country.states);

        if (stateCode) {
          const state = country.states.find(s => s.code === stateCode);
          if (state) {
            setSelectedState(state);
            setAvailableCities(state.cities);
          }
        }
      }
    }
  };

  return {
    selectedCountry,
    selectedState,
    availableStates,
    availableCities,
    handleCountryChange,
    handleStateChange,
    initializeFromData,
  };
};