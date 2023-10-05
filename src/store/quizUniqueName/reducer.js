import { createSlice } from '@reduxjs/toolkit';

const quizUniqueNameSlice = createSlice({
  name: 'quizUniqueName',
  initialState: '',
  reducers: {
    setQuizUniqueName: (state, action) => action.payload,
  },
});

export const { setQuizUniqueName } = quizUniqueNameSlice.actions;

export const selectQuizUniqueName = (state) => state.quizUniqueName;

export default quizUniqueNameSlice.reducer;
