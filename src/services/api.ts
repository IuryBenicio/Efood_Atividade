import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Item } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Item[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurante: builder.query<Item, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api
export default api
