import { configureStore } from "@reduxjs/toolkit";
import gatePassRequestReducer from "./features/gatepassRequest/gatepassRequestSlice";

export const store = configureStore({
  reducer: {
    gatePassRequest: gatePassRequestReducer,
  },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
