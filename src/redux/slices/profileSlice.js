// src/redux/slices/profileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';


export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
  try {
      const { data } = await api.get('/api/profile');
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: { info: null, status: 'idle', error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.status = 'loading'; state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, { payload }) => {
        state.status = 'succeeded'; state.info = payload;
      })
      .addCase(fetchProfile.rejected, (state, { payload }) => {
        state.status = 'failed'; state.error = payload;
      });
  }

});

export default profileSlice.reducer;
