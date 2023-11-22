import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "#" }),
  tagTypes: ['products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url:`products`,
        method: 'GET',
    }),
    providesTags: ['products'],
    }),
    getProductByName: builder.query({
        query: (name) => ({
          url:`products/${name}`,
          method: 'GET',
      }),
      providesTags: ['products'],
      }),
      deleteProduct: builder.mutation({
        query: (id) => ({
          url:`products/${id}`,
          method: 'DELETE',
      }),
      invalidatesTags: ['products'],
      }),
      addProduct: builder.mutation({
        query: (products) => ({
          url:`products`,
          method: 'POST',
      }),
      invalidatesTags: ['products'],
      }),
  }),
});

export const { useGetProductsQuery, useGetProductByNameQuery, useDeleteProductMutation, useAddProductMutation } = productApi;
