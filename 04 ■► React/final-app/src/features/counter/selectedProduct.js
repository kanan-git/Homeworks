import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productData: {}
}

const productSlice = createSlice(
    {
        name: "selectedProduct",
        initialState,
        reducers: {
            setCurrentProduct: (state, action) => {
                state.productData = action.payload
            }
        }
    }
)

export const { setCurrentProduct } = productSlice.actions
export default productSlice.reducer