import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiSupervising = createAsyncThunk(
  'student/from-supervising',
  async (values) => {
    const res = await customApi(
      `student/from-supervising?school-year-id=${values}`,
    );
    return res.data;
  },
);

export const SupervisingSlice = createSlice({
  name: 'lecturers',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiSupervising.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiSupervising.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiSupervising.rejected, (state, action) => {
        state.isLoading = false;
        console.error('Error fetching:', action.error);
      });
  },
});
export default SupervisingSlice.reducer;
