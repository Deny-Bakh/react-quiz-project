import axios from '../service';

const quizApi = {
  get: (chosenQuiz) => axios.get(`/your-quiz?quiz=${chosenQuiz}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizApi };
