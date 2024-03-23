import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiStudentNotSupervising = createAsyncThunk(
  'student/not-supervising',
  async (values) => {
    const res = await customApi(
      `student/not-supervising?school-year-id=${values.id}&internship-semester-id=${values.semester}`,
    );
    return res.data;
  },
);
export const StudentNotSupervisingSlice = createSlice({
  name: 'studentNotSupervising',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiStudentNotSupervising.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiStudentNotSupervising.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiStudentNotSupervising.rejected, (state, action) => {
        state.isLoading = false;
        console.error('Error fetching student:', action.error);
      });
  },
});
export default StudentNotSupervisingSlice.reducer;
