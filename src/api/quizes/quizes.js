import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizes = createApi({
  reducerPath: 'quizes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64f4523e932537f4051a408a.mockapi.io/api/v1/',
  }),
  tagTypes: ['Quiz'],
  endpoints: (builder) => ({
    getQuizes: builder.query({
      query: () => ({
        url: 'quiz',
        method: 'GET',
      }),
      providesTags: (result) => (result
        ? [...result.map(({ id }) => ({ type: 'Quiz', id })), 'Quiz']
        : ['Quiz']),
    }),
    addQuiz: builder.mutation({
      query: (newQuiz) => ({
        url: 'quiz',
        method: 'POST',
        body: newQuiz,
      }),
      invalidatesTags: ['Quiz'],
    }),
    toggleFavorite: builder.mutation({
      query: ({ id, favorite }) => ({
        url: `quiz/${id}`,
        method: 'PUT',
        body: { favorite },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Quiz', id: arg.id }],
    }),
  }),
});

export const { useGetQuizesQuery, useAddQuizMutation, useToggleFavoriteMutation } = quizes;
