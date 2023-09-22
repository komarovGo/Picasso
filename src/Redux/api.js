import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bacApi = createApi({
  reducerPath: "bacApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getAllPost: build.query({
      query: () => ({
        url: "posts?page=1",
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery
} = bacApi;
