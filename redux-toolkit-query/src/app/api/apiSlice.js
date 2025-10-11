import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const posts = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001"
    }),
    
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: ["Post"]
        }),
        addPost: builder.mutation({
            query: (post) => ({
                url: "posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ["Post"]
        })
    })
})

export default posts;
export const { useGetPostsQuery, useAddPostMutation } = posts;