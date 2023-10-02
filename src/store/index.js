import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { quizesReducer } from './quizes';
import { quizReducer } from './quiz';
import { quizes } from '../api/quizes/quizes';

const rootReducer = combineReducers({
  quizesReducer,
  quiz: quizReducer,
  [quizes.reducerPath]: quizes.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quizes.middleware),
});

setupListeners(store.dispatch);
export default store;

// import { setupListeners } from '@reduxjs/toolkit/query';
// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { quizesReducer } from './quizes'; // Import your quizes reducer
// import { quizReducer } from './quiz'; // Import your quiz reducer
// import { quizes } from '../api/quizes/quizes'; // Import your quizes API slice
// import { quizApi } from '../api/quizApi/quizApi'; // Import your quiz API slice

// const rootReducer = combineReducers({
//   quizesReducer,
//   quiz: quizReducer,
//   [quizes.reducerPath]: quizes.reducer,
//   [quizApi.reducerPath]: quizApi.reducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quizes.middleware, quizApi.middleware),
// });

// setupListeners(store.dispatch);

// export default store;
