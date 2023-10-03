import React from 'react';
import { useForm } from 'react-hook-form';
import service from '../../api/service';

function CreateQuiz() {
  const {
    register, handleSubmit, errors, reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Separate the data for each API endpoint
      const quizData = {
        quizName: data.quizName,
        image: data.quizImage,
        description: data.quizDescription,
        quizUniqueName: data.quizUniqueName,
      };

      const questionData = {
        question: data.question,
        options: [data.option1, data.option2, data.option3, data.option4],
        answer: data.answer,
        image: data.questionImage,
        chosenQuiz: data.chosenQuiz, // Ensure it matches quizUniqueName
      };

      // Make the API requests
      const quizResponse = await service.post('/https://64f4523e932537f4051a408a.mockapi.io/api/v1/', quizData);
      const questionResponse = await service.post('/https://64f4523e932537f4051a408a.mockapi.io/api/v1/your-quiz', questionData);

      // Handle success responses (you can also add error handling)
      if (quizResponse.status === 200 && questionResponse.status === 200) {
        // Reset the form after successful submission
        reset();
        alert('Quiz and Question submitted successfully!');
      } else {
        // Handle error responses
        alert('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle any errors that occur during submission
      alert('An error occurred while submitting the data.');
    }
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Quiz Name</label>
          <input
            type="text"
            name="quizName"
            ref={register({ required: 'Quiz Name is required' })}
          />
          {errors.quizName && <p>{errors.quizName.message}</p>}
        </div>
        <div>
          <label>Quiz Image</label>
          <input type="text" name="quizImage" ref={register} />
        </div>
        <div>
          <label>Quiz Description</label>
          <input type="text" name="quizDescription" ref={register} />
        </div>
        <div>
          <label>Quiz Unique Name</label>
          <input
            type="text"
            name="quizUniqueName"
            ref={register({ required: 'Quiz Unique Name is required' })}
          />
          {errors.quizUniqueName && <p>{errors.quizUniqueName.message}</p>}
        </div>
        <div>
          <label>Question</label>
          <input
            type="text"
            name="question"
            ref={register({ required: 'Question is required' })}
          />
          {errors.question && <p>{errors.question.message}</p>}
        </div>
        <div>
          <label>Option 1</label>
          <input type="text" name="option1" ref={register} />
        </div>
        <div>
          <label>Option 2</label>
          <input type="text" name="option2" ref={register} />
        </div>
        <div>
          <label>Option 3</label>
          <input type="text" name="option3" ref={register} />
        </div>
        <div>
          <label>Option 4</label>
          <input type="text" name="option4" ref={register} />
        </div>
        <div>
          <label>Answer</label>
          <input
            type="text"
            name="answer"
            ref={register({ required: 'Answer is required' })}
          />
          {errors.answer && <p>{errors.answer.message}</p>}
        </div>
        <div>
          <label>Question Image</label>
          <input type="text" name="questionImage" ref={register} />
        </div>
        <div>
          <label>Chosen Quiz</label>
          <input
            type="text"
            name="chosenQuiz"
            ref={register({ required: 'Chosen Quiz is required' })}
          />
          {errors.chosenQuiz && <p>{errors.chosenQuiz.message}</p>}
        </div>
        <div>
          <button type="submit">Create Quiz</button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuiz;
