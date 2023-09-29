// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { quizesReducer } from './quizes/reducer';

// const rootReducer = combineReducers({
//   quizesReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// // const store = createStore(reducer, initialState);

// export default store;

// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import quizesReducer from './quizes/reducer';

// const store = configureStore({
//   reducer: {
//     quizesReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { quizesReducer } from './quizes';
import { quizReducer } from './quiz';

const rootReducer = combineReducers({
  quizesReducer,
  quiz: quizReducer,
});

const store = configureStore({ reducer: rootReducer });
// const store = createStore(reducer, initialState);

export default store;
