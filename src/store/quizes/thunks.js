import { createAsyncThunk } from '@reduxjs/toolkit';
import { SEARCH_QUIZZES } from './constants';
import { quizes } from '../../api/quizes/quizes';

const fetchQuizes = createAsyncThunk(`${SEARCH_QUIZZES}/fetchQuizes`, async () => {
  const response = await quizes.get();
  return response;
});

export default {
  fetchQuizes,
};
