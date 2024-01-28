import { create } from "zustand";

/**
 * Initial Process for game
 *
 * @type {{ data: []; error: null | object; }}
 */
const initialProcess = {
  data: [],
  error: null,
};

/**
 * Initial state for game
 *
 * @type {{
 * choice: [];
 * score: number;
 * success: number;
 * errors: number;
 * turns: number;
 * correctAnswers: [];
 * process: {{ data: []}; error: null| object; };
 * isComplete: boolean;
 * reset: boolean;
 * }}
 */
const initialState = {
  choice: [],
  score: 0,
  success: 0,
  errors: 0,
  turns: 0,
  correctAnswers: [],
  process: initialProcess,
  isComplete: false,
  reset: false,
};

/**
 * @typedef {{
 * choice: [];
 * score: number;
 * success: number;
 * errors: number;
 * turns: number;
 * correctAnswers: [];
 * process: {{ data: []}; error: null| object; };
 * isComplete: boolean;
 * reset: boolean;
 * setChoice(choice: []): void;
 * setScore(score: number): void;
 * setSuccess(success: number): void;
 * setErrors(errors: number): void;
 * setTurns(turns: number): void;
 * setCorrectAnswers(correctAnswers: []): void;
 * setProcess(process: {{ data: []}; error: null| object; }): void;
 * setReset(reset: boolean): void;
 * setIsComplete(isComplete: boolean): void;
 * resetGame(): void;
 * }} GameSlice
 */

/**
 * Game Store
 * @typedef {import('zustand').StateCreator<GameSlice, [], [], GameSlice>} GameSliceCreator
 *
 * @type {GameSliceCreator}
 */
const useGameStore = create((set) => ({
  ...initialState,
  setChoice: (choice) => set(() => ({ choice })),
  setScore: (score) => set(() => ({ score })),
  setSuccess: (success) => set(() => ({ success })),
  setErrors: (errors) => set(() => ({ errors })),
  setTurns: (turns) => set(() => ({ turns })),
  setCorrectAnswers: (correctAnswers) => set(() => ({ correctAnswers })),
  setProcess: (process) => set(() => ({ process })),
  setReset: (reset) => set(() => ({ reset })),
  setIsComplete: (isComplete) => set(() => ({ isComplete })),
  resetGame: () => {
    initialState.isComplete = true;
    return set(initialState);
  },
}));

export default useGameStore;
