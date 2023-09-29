/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { SEARCH_QUIZZES } from './constants';
import actions from './actions';
import thunks from './thunks';

const initialState = {
  quizes: [],
  filter: '',
  filteredQuizes: [],
};

export const quizesReducer = createSlice({
  name: SEARCH_QUIZZES,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      state.filter = payload;
      state.filteredQuizes = state.quizes.filter((quiz) => {
        const quizIntial = quiz.quiz.toLowerCase();
        return quizIntial.indexOf(payload.toLowerCase()) !== -1;
      });
    });
    builder.addCase(thunks.fetchQuizes.fulfilled, (state, { payload }) => {
      state.quizes = payload;
    });
  },
});

export default quizesReducer.reducer;
