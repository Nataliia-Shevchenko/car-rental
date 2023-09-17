import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const BASE_URL = `https://64fc57eb605a026163ae648a.mockapi.io/`;


export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCarsListbyPage: builder.query({
      query: (page = 1) => ({ url: `/cars?page=${page}&limit=8` }),
      providesTags: ["cars"],
    }),
    getCarsList: builder.query({
      query: () => ({ url: `/cars` }),
      providesTags: ["cars"],
    }),
  }),
});

export const { useGetCarsListbyPageQuery, useGetCarsListQuery  } = carApi;
