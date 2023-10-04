// import axios from '../service';

// const quizes = {
//   get: () => axios.get('/quiz')
//     .then(({ data }) => data)
//     .catch((err) => {
//       throw new Error(err);
//     }),
//   post: (params) => axios.post('/quiz', params)
//     .then(({ data }) => data)
//     .catch((err) => {
//       throw new Error(err);
//     }),
// };

// export { quizes };

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const quizes = createApi({
//   reducerPath: 'quizes',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://64f4523e932537f4051a408a.mockapi.io/api/v1/' }),
//   endpoints: (builder) => ({
//     getQuizesByName: builder.query({
//       query: (quiz) => quiz,
//     }),
//     addQuiz: builder.mutation({
//       // Modify the mutation function to accept a `Partial<Quiz>` arg and return a `Quiz`
//       query: (newQuiz) => ({
//         url: 'quiz', // You don't need to specify the full URL here, just the path
//         method: 'POST',
//         body: newQuiz,
//       }),
//     }),
//   }),
// });

// export const { useGetQuizesByNameQuery } = quizes;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizes = createApi({
  reducerPath: 'quizes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64f4523e932537f4051a408a.mockapi.io/api/v1/',
  }),
  endpoints: (builder) => ({
    getQuizesByName: builder.query({
      query: (quiz) => quiz,
    }),
    addQuiz: builder.mutation({
      query: (newQuiz) => ({
        url: 'quiz',
        method: 'POST',
        body: newQuiz,
      }),
    }),
  }),
});

export const { useGetQuizesByNameQuery, useAddQuizMutation } = quizes;
