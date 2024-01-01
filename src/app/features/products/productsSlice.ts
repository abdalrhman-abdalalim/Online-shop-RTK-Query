import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => {
        return {
          url: "/products",
        };
      },
    }),
    getProduct: builder.query({
      query: ({ id }) => {
        return {
          url: `/products/${id}`,
        };
      },
    }),
  }),
});

export const { useGetProductListQuery, useGetProductQuery } = productsApiSlice;
