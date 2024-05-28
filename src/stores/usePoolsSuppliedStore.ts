import { createStore } from "zustand/vanilla";

import createBoundedUseStore from "@/utils/createBoundedUseStore";
import { PoolsSuppliedType } from "@/types/dataTypes/poolsSupplied";

type State = {
  poolsSupplied: PoolsSuppliedType[];
  loaded: boolean;
};

type Action = {
  setPoolsSupplied: (poolsSupplied: State["poolsSupplied"]) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const poolsSuppliedStore = createStore<State & Action>()((set) => ({
  poolsSupplied: [],
  loaded: false,
  setPoolsSupplied: (poolsSupplied) =>
    set(() => ({
      poolsSupplied,
      loaded: true,
    })),
}));

// Create a hook to be used inside react components
const usePoolsSuppliedStore = createBoundedUseStore(poolsSuppliedStore);

export default usePoolsSuppliedStore;
