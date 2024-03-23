import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiLecturerDepart = createAsyncThunk(
  'lecturers/from-department',
  async (values) => {
    try {
      const res = await customApi(
        `lecturers/from-department?department-id=${values}`,
      );
      return res.data;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  },
);
export const LecturerDepartmentSlice = createSlice({
  name: 'lecturersDepartment',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiLecturerDepart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiLecturerDepart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiLecturerDepart.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default LecturerDepartmentSlice.reducer;
