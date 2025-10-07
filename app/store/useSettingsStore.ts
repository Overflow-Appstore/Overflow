import create from 'zustand';

type SettingsState = {
  language: string;
  lowBandwidthMode: boolean;
  setLanguage: (language: string) => void;
  toggleLowBandwidth: () => void;
};

export const useSettingsStore = create<SettingsState>((set) => ({
  language: 'en',
  lowBandwidthMode: false,
  setLanguage: (language) => set({ language }),
  toggleLowBandwidth: () => set((state) => ({ lowBandwidthMode: !state.lowBandwidthMode })),
}));
