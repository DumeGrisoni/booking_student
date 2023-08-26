import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('user/loginUser', async () => {
  // const request =
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    user: null,
    error: null,
  },
});

export default userSlice.reducer;
