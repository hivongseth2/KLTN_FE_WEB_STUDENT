import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiDetail = createAsyncThunk(
  'lecturers/detail-person',
  async () => {
    try {
      const res = await customApi('lecturers/detail-person');
      return res.data;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  },
);
export const LecturerSlice = createSlice({
  name: 'lecturers',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiDetail.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default LecturerSlice.reducer;
