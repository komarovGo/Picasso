import { configureStore } from "@reduxjs/toolkit";
import { bacApi } from "./api";

import PostSlices from "./slices";

export const store = configureStore({
  reducer: {
    [bacApi.reducerPath]: bacApi.reducer,
    postInfo: PostSlices,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bacApi.middleware),
});
