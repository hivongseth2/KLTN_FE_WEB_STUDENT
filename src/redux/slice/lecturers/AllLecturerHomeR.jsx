import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiLecturerHomeRoom = createAsyncThunk(
  'lecturers/from-homeroom',
  async () => {
    try {
      const res = await customApi(`lecturers/from-homeroom`);
      return res.data;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  },
);
export const LecturerHomeRoomSlice = createSlice({
  name: 'AllLecturersHomeRoom',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiLecturerHomeRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiLecturerHomeRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiLecturerHomeRoom.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default LecturerHomeRoomSlice.reducer;
