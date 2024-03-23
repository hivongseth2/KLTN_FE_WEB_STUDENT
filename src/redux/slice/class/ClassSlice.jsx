import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiClass = createAsyncThunk(
  'internship-semester?school-year-id',
  async (values) => {
    const res = await customApi(`internship-semester?school-year-id=${values}`);

    return res.data;
  },
);
export const ClassSlice = createSlice({
  name: 'class',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiClass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiClass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiClass.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default ClassSlice.reducer;
