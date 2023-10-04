import React from 'react';
import { Controller } from 'react-hook-form';
import styles from '../QuizQuestionsForm/QuizQuestionsForm.module.css';

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
        render={({ field }) => (
          isTextArea ? (
            <textarea id={name} {...field} />
          ) : (
            <input type="text" id={name} {...field} />
          )
        )}
        rules={rules} // Apply validation rules
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
}

export default FormField;
