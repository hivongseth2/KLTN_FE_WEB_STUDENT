import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customApi } from '@/app/api/CustomerAPI';

const initialState = {
  data: [],
  isLoading: false,
};
export const fetchApiFalcuty = createAsyncThunk('faculty', async () => {
  const res = await customApi(`faculty`);

  return res.data;
});

export const fetchApiEditFaculty = createAsyncThunk(
  'faculty/update',
  async (values) => {
    const res = await customApi(`faculty/${values.id}`, 'PUT', values);

    if (res.data.statusCode === 200 || res.data.statusCode === 201) {
      console.log('res', res);
    }
    return res.data;
  },
);

export const fetchApiAddFalcuty = createAsyncThunk(
  'falcuty/add',
  async (values) => {
    const res = await customApi('faculty', 'POST', values);

    return res.data;
  },
);
export const FalcutySlice = createSlice({
  name: 'faculty',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiFalcuty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiFalcuty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(fetchApiFalcuty.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchApiAddFalcuty.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      })
      .addCase(fetchApiEditFaculty.fulfilled, (state, action) => {
        const updatedFaculty = action.payload;

        const index = state.data.findIndex(
          (falcuty) => falcuty.id === updatedFaculty.id,
        );

        if (index !== -1) {
          state.data[index] = updatedFaculty;
        }
      });
  },
});
export default FalcutySlice.reducer;
