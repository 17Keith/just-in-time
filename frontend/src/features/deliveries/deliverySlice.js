import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import deliveryService from './deliveryService'

const initialState = {
  deliveries: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new delivery
export const createDeliveries = createAsyncThunk(
  'deliveries/create',
  async (deliveryData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await deliveryService.createDeliveries(deliveryData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user deliveries
export const getDeliveries = createAsyncThunk(
  'deliveries/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await deliveryService.getDeliveries(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user delivery
export const deleteDeliveries = createAsyncThunk(
  'deliveries/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await deliveryService.deleteDeliveries(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDeliveries.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createDeliveries.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.delivery.push(action.payload)
      })
      .addCase(createDeliveries.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getDeliveries.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDeliveries.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.deliveries = action.payload
      })
      .addCase(getDeliveries.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteDeliveries.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteDeliveries.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.deliveries = state.deliveries.filter(
          (delivery) => delivery._id !== action.payload.id
        )
      })
      .addCase(deleteDeliveries.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = deliverySlice.actions
export default deliverySlice.reducer
