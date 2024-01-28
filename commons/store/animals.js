import { create } from "zustand";

/**
 * Initial State Data Animals
 *
 * @type {{ data: []; }}
 */
const initialState = { data: [] };

/**
 * @typedef {{ data: []; setData(data: []): void; reset(): void; }} AnimalSlice
 */

/**
 * Animals Store
 * @typedef {import('zustand').StateCreator<AnimalSlice, [], [], AnimalSlice>} AnimalSliceCreator
 *
 * @type {AnimalSliceCreator}
 */
const useAnimalsStore = create()((set) => ({
  ...initialState,
  setData: (data) => set(() => ({ data })),
  reset: () => set(initialState),
}));

export default useAnimalsStore;
