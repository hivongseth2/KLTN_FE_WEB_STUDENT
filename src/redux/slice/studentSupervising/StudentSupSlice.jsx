import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiStudentSupervising = createAsyncThunk(
  'student/supervising',
  async ({ item, teacher }) => {
    const res = await customApi(
      `student/from-homeroom-by-supervisor?school-year-id=${item.id}&supervisor-id=${teacher}`,
    );
    return res.data;
  },
);
export const StudentSupervisingSlice = createSlice({
  name: 'studentNotSupervising',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiStudentSupervising.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiStudentSupervising.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiStudentSupervising.rejected, (state, action) => {
        state.isLoading = false;
        console.error('Error fetching student:', action.error);
      });
  },
});
export default StudentSupervisingSlice.reducer;
