import { configureStore } from "@reduxjs/toolkit";
import gatePassRequestReducer from "./features/gatepassRequest/gatepassRequestSlice";
import userReducer from "./features/user/userSlice";
import api from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    gatePassRequest: gatePassRequestReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
