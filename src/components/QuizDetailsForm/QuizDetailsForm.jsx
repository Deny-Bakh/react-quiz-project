import React from 'react';
import { Controller } from 'react-hook-form';
import useQuizDetailsFormValidation from '../QuizDetailsFormValidation/QuizDetailsFormValidation';
import { useAddQuizMutation } from '../../api/quizes/quizes';
import styles from './QuizDetailsForm.module.css';

function FormField({
  name, label, control, defaultValue, rules, errors,
}) {
  const isTextArea = name === 'description';

  return (
    <div className={styles.input_container}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (isTextArea ? (
            <textarea id={name} {...field} />
        ) : (
            <input type="text" id={name} {...field} />
        ))
        }
        rules={rules}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
}

function QuizDetailsForm({ onFormSubmit }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    validationRules,
  } = useQuizDetailsFormValidation();

  const [addQuiz, { isLoading, isError }] = useAddQuizMutation();

  const onSubmit = async (data) => {
    console.log('Form data:', data);

    if (Object.keys(errors).length > 0) {
      console.error('Form validation errors:', errors);
      return;
    }

    try {
      const response = await addQuiz(data).unwrap();

      console.log('Quiz added successfully:', response);

      reset();
      if (onFormSubmit) {
        onFormSubmit(data.quizUniqueName);
      }
    } catch (error) {
      console.error('Error adding quiz:', error);
    }
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <h2>Create Quiz</h2>
        <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="quiz"
            label="Quiz Name"
            control={control}
            defaultValue=""
            rules={validationRules.quiz}
            errors={errors}
          />

          <FormField
            name="description"
            label="Description"
            control={control}
            defaultValue=""
            rules={validationRules.description}
            errors={errors}
          />

          <FormField
            name="quizUniqueName"
            label="Quiz Unique Name"
            control={control}
            defaultValue=""
            rules={validationRules.quizUniqueName}
            errors={errors}
          />

          <FormField
            name="image"
            label="Image URL"
            control={control}
            defaultValue=""
            rules={validationRules.image}
            errors={errors}
          />

          <FormField
            name="background"
            label="Background URL"
            control={control}
            defaultValue=""
            rules={validationRules.background}
            errors={errors}
          />

          <div>
            <button className={styles.button} type="submit" disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Add Quiz'}
            </button>
          </div>

          {isError && <p>Error adding quiz</p>}
        </form>
      </div>
    </div>
  );
}

export default QuizDetailsForm;
