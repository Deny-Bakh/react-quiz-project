import { createAction } from '@reduxjs/toolkit';
import { SEARCH_QUIZZES } from './constants';

const filterAction = createAction(`${SEARCH_QUIZZES}/filterAction`, (payload) => ({ payload }));
const getAction = createAction(`${SEARCH_QUIZZES}/getQuizez`, (payload) => ({ payload }));
export default {
  filterAction,
  getAction,
};
