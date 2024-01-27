import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioType } from '../../Containers/Cardapio'

type CartState = {
  items: CardapioType[]
  isOpen: boolean
  isCheckout: 'order' | 'adress' | 'payment' | 'confirmation'
  TotalPrice: number
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckout: 'order',
  TotalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioType>) => {
      const product = state.items.find((item) => item.id === action.payload.id)
      if (!product) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
      console.log('abri')
    },
    close: (state) => {
      state.isOpen = false
    },
    changeCartModal: (
      state,
      action: PayloadAction<'order' | 'adress' | 'payment' | 'confirmation'>
    ) => {
      state.isCheckout = action.payload
    },
    UpdateTotalPrice: (state, action: PayloadAction<number>) => {
      state.TotalPrice = action.payload
    }
  }
})

export const { add, open, close, remove, changeCartModal, UpdateTotalPrice } =
  cartSlice.actions
export default cartSlice.reducer
