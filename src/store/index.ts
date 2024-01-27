import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducer/cart'
import orderReducer from './reducer/order'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
