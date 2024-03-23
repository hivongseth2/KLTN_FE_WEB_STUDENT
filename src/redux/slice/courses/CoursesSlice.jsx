import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiCourses = createAsyncThunk('api/school-year', async () => {
  const res = await customApi('school-year');
  return res.data;
});
export const CoursesSlice = createSlice({
  name: 'courses',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiCourses.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default CoursesSlice.reducer;
