import { useState } from 'react';

type Filter = {
  id: string;
  label: string;
};

type Result = {
  id: string;
  name: string;
  cause: string;
  location: string;
  latitude: number;
  longitude: number;
};

const availableFilters: Filter[] = [
  { id: 'region-africa', label: 'Africa' },
  { id: 'region-asia', label: 'Asia' },
  { id: 'cause-education', label: 'Education' },
  { id: 'cause-health', label: 'Health' },
  { id: 'language-es', label: 'Español' },
];

const sampleResults: Result[] = [
  { id: 'res-1', name: 'Hope Centre Nairobi', cause: 'Education', location: 'Nairobi, Kenya', latitude: -1.2921, longitude: 36.8219 },
  { id: 'res-2', name: 'Wellness Clinic Lima', cause: 'Health', location: 'Lima, Peru', latitude: -12.0464, longitude: -77.0428 },
];

export function useDiscover() {
  const [active, setActive] = useState<string[]>([]);

  const setFilter = (filterId: string) => {
    setActive((current) =>
      current.includes(filterId)
        ? current.filter((id) => id !== filterId)
        : [...current, filterId]
    );
  };

  // TODO: query Firestore with composite indexes for active filters.
  const results = sampleResults;

  return {
    filters: { available: availableFilters, active },
    setFilter,
    results,
  };
}
