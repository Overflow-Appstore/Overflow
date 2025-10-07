import { useEffect, useState } from 'react';
import * as Network from 'expo-network';

export function useLowBandwidth() {
  const [lowBandwidth, setLowBandwidth] = useState(false);

  useEffect(() => {
    Network.getNetworkStateAsync()
      .then((state) => {
        setLowBandwidth(state.type === Network.NetworkStateType.CELLULAR);
      })
      .catch(() => setLowBandwidth(false));
  }, []);

  return lowBandwidth;
}
