import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";

import movieReducer from "../reducer/movie.reducer";

const isDebuggerMode = process.env.NODE_ENV !== "production";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  devTools: isDebuggerMode,
  middleware: (getDefaultMiddleware) => {
    if (isDebuggerMode) {
      return getDefaultMiddleware().concat(logger);
    }
    return getDefaultMiddleware();
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
