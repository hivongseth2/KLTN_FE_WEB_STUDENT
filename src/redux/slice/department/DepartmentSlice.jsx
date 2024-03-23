// import { customApi } from '@/app/api/CustomerAPI';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = {
//   data: [],
//   isLoading: false,
// };
// export const fetchApiDepart = createAsyncThunk(
//   'lecturers/detail-person',
//   async (values) => {
//     try {
//       const res = await customApi('lecturers/detail-person');
//       console.log('res detail', res.data);
//       return res.data;
//     } catch (error) {
//       console.log({ error });
//       throw error;
//     }
//   },
// );
// export const LecturerSlice = createSlice({
//   name: 'lecturers',
//   initialState,

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchApiDetail.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchApiDetail.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action?.payload;
//         console.log('action.payload', action.payload);
//       })
//       .addCase(fetchApiDetail.rejected, (state, action) => {
//         state.isLoading = false;
//         console.error('Error fetching companys:', action.error);
//       });
//   },
// });
// export default LecturerSlice.reducer;
