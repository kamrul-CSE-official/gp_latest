import { configureStore } from "@reduxjs/toolkit";
import gatePassRequestReducer from "./features/gatepassRequest/gatepassRequestSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    gatePassRequest: gatePassRequestReducer,
    user: userReducer
  },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
