import { configureStore } from "@reduxjs/toolkit"
import posts from "./api/apiSlice"
import postsSlice from "../features/posts/postsSlice"

const store = configureStore({
    reducer: {
        [posts.reducerPath]: posts.reducer,
        [postsSlice.name]: postsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), posts.middleware]
        // getDefaultMiddleware().concat(posts.middleware)
});

export default store;