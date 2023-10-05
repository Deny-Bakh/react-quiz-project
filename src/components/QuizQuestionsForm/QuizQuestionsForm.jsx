import React from 'react';
import { Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { quizApi } from '../../api/quizApi/quizApi';
import styles from './QuizQuestionsForm.module.css';
import QuizQuestionsFormValidation from '../QuizQuestionsFormValidation/QuizQuestionsFormValidation';

function QuizQuestionsForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    validationRules,
  } = QuizQuestionsFormValidation();

  function FormField({ name, label }) {
    return (
      <div className={styles.input_container}>
        <label htmlFor={name}>{label}</label>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type="text" id={name} {...field} />
          )}
          rules={validationRules[name]}
        />
        {errors[name] && <p>{errors[name].message}</p>}
      </div>
    );
  }

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log('Form data:', data);

    if (Object.keys(errors).length > 0) {
      console.error('Form validation errors:', errors);
      return;
    }

    try {
      const postResponse = await quizApi.post(data);

      console.log('Quiz added successfully:', postResponse);

      reset();
      navigate('/quiz-created');
    } catch (error) {
      console.error('Error adding quiz:', error);
    }
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <h2>Create Quiz</h2>
        <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
          <FormField name="question" label="Question" />
          <div className={styles.input_container}>
            <label>Options (comma-separated)</label>
            <div className={styles.options_container}>
              {Array.from({ length: 4 }).map((_, index) => (
                <Controller
                  key={index}
                  name={`options[${index}]`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder={`Option ${index + 1}`}
                    />
                  )}
                  rules={validationRules.options}
                />
              ))}
            </div>
          </div>
          <FormField name="answer" label="Answer" />
          <FormField name="image" label="Image URL" />
          <FormField name="chozenQuiz" label="Chosen Quiz (matches Quiz Unique Name)" />
          <div>
            <button className={styles.button} type="submit">
              Add Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuizQuestionsForm;
