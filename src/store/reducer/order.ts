import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type productsType = {
  id: number
  price: number
}

export type adress = {
  receiver: string
  adress: {
    description: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
}

export type PaymentType = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

export type PurchasePayload = {
  products?: productsType[] | void[]
  delivery?: {
    receiver: string
    adress: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment?: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type orderState = {
  orderCheckout: PurchasePayload
  dataId: number
}

const initialState: orderState = {
  orderCheckout: {
    products: [],
    delivery: {
      receiver: '',
      adress: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    },
    payment: {
      card: {
        name: '',
        number: '',
        code: 0,
        expires: {
          month: 0,
          year: 0
        }
      }
    }
  },
  dataId: 0
}

const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {
    addProducts: (state, action: PayloadAction<productsType[] | void[]>) => {
      state.orderCheckout.products = action.payload
    },
    addAdress: (state, action: PayloadAction<adress>) => {
      state.orderCheckout.delivery = action.payload
    },
    addpayment: (state, action: PayloadAction<PaymentType>) => {
      state.orderCheckout.payment = action.payload
    }
  }
})

export const { addProducts, addAdress, addpayment } = orderSlice.actions
export default orderSlice.reducer
