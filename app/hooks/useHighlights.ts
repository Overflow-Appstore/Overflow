import { useEffect, useState } from 'react';

interface Highlight {
  id: string;
  name: string;
  summary: string;
}

export function useHighlights() {
  const [highlight, setHighlight] = useState<Highlight | null>(null);

  useEffect(() => {
    // TODO: wire to Firestore daily highlight collection.
    setHighlight({
      id: 'highlight-1',
      name: 'Grace Awuor',
      summary: 'Coordinating safe water deliveries in Kisumu, Kenya.',
    });
  }, []);

  return highlight;
}
