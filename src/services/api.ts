import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Item } from '../Pages/Home'
import { PurchasePayload } from '../store/reducer/order'

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
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteQuery,
  usePurchaseMutation
} = api
export default api
