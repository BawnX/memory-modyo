import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Initial state user
 *
 * @type {{ seed: number; name: string; }}
 */
const initialState = { seed: 0, name: "" };

/**
 * @typedef {{ seed: number; name: string; setSeed(seed: number): void; setName(seed: string): void; reset(): void; }} UserSlice
 */

/**
 * User Store
 * @typedef {import('zustand').StateCreator<UserSlice, [], [], UserSlice>} UserSliceCreator
 *
 * @type {UserSliceCreator}
 */
const useUserStore = create(
  persist(
    (set) => ({
      ...initialState,
      setSeed: (seed) => set(() => ({ seed })),
      setName: (name) => set(() => ({ name })),
      reset: () => set(initialState),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useUserStore;
