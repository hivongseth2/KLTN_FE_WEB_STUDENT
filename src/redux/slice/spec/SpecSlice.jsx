import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiSpec = createAsyncThunk(
  'api/department',
  // values
  async () => {
    const res = await customApi('department');
    return res.data;
  },
);
export const SpecSlice = createSlice({
  name: 'spec',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiSpec.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiSpec.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiSpec.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default SpecSlice.reducer;
