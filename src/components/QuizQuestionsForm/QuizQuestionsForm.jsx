// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import validUrl from 'valid-url'; // Import the valid-url package
// import { useAddQuizMutation } from '../../api/quizes/quizes';
// import styles from './QuizQuestionsForm.module.css';

// function QuizQuestionsForm() {
//   const {
//     control, handleSubmit, formState: { errors }, reset,
//   } = useForm();
//   const [addQuiz, { isLoading, isError }] = useAddQuizMutation();

//   const isValidURL = (url) => validUrl.isUri(url);

//   const onSubmit = async (data) => {
//     console.log('Form data:', data);

//     if (Object.keys(errors).length > 0) {
//       console.error('Form validation errors:', errors);
//       return;
//     }

//     try {
//       // Validation logic for image URL
//       if (!isValidURL(data.image)) {
//         console.error('Invalid image URL');
//         return;
//       }

//       // Additional validation logic for other fields (options, answer, etc.)
//       // ...

//       const response = await addQuiz(data).unwrap();

//       console.log('Quiz added successfully:', response);

//       reset();
//     } catch (error) {
//       console.error('Error adding quiz:', error);
//     }
//   };

//   return (
//     <div className={styles.card_container}>
//       <div className={styles.card}>
//         <h2>Create Quiz</h2>
//         <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
//           {/* Additional Inputs */}
//           <div className={styles.input_container}>
//             <label htmlFor="question">Question</label>
//             <Controller
//               name="question"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="question"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Question is required',
//               }}
//             />
//             {errors.question && <p>{errors.question.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="options">Options (comma-separated)</label>
//             <Controller
//               name="options"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="options"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Options are required',
//               }}
//             />
//             {errors.options && <p>{errors.options.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="answer">Answer</label>
//             <Controller
//               name="answer"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="answer"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Answer is required',
//               }}
//             />
//             {errors.answer && <p>{errors.answer.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="image">Image URL</label>
//             <Controller
//               name="image"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="image"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Image URL is required',
//                 validate: (value) => {
//                   if (!isValidURL(value)) {
//                     return 'Invalid image URL';
//                   }
//                   return true;
//                 },
//               }}
//             />
//             {errors.image && <p>{errors.image.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="chosenQuiz">Chosen Quiz (matches Quiz Unique Name)</label>
//             <Controller
//               name="chosenQuiz"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="chosenQuiz"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Chosen Quiz is required',
//               }}
//             />
//             {errors.chosenQuiz && <p>{errors.chosenQuiz.message}</p>}
//           </div>

//           <div>
//             <button className={styles.button} type="submit" disabled={isLoading}>
//               {isLoading ? 'Adding...' : 'Add Quiz'}
//             </button>
//           </div>

//           {isError && <p>Error adding quiz</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default QuizQuestionsForm;

// QuizQuestionsForm.jsx

// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import validUrl from 'valid-url'; // Import the valid-url package
// import { useAddQuizMutation } from '../../api/quizes/quizes';
// import styles from './QuizQuestionsForm.module.css';
// import { quizApi } from '../../api/quizApi/quizApi';

// function QuizQuestionsForm() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     getValues,
//   } = useForm();
//   const [{ isLoading, isError }] = useAddQuizMutation();

//   const isValidURL = (url) => validUrl.isUri(url);

//   // Custom validation rule for the "answer" field
//   const validateAnswer = (value) => {
//     const options = getValues('options'); // Get the current options array
//     const isValid = options.includes(value);
//     return isValid || 'Answer must match one of the options';
//   };

//   const onSubmit = async (data) => {
//     console.log('Form data:', data);

//     if (Object.keys(errors).length > 0) {
//       console.error('Form validation errors:', errors);
//       return;
//     }

//     try {
//       // Validation logic for image URL
//       if (!isValidURL(data.image)) {
//         console.error('Invalid image URL');
//         return;
//       }

//       // Additional validation logic for other fields (options, answer, etc.)
//       // ...

//       // Use the quizApi to make the POST request
//       const response = await quizApi.post(data);

//       console.log('Quiz added successfully:', response);

//       reset();
//     } catch (error) {
//       console.error('Error adding quiz:', error);
//     }
//   };

//   return (
//     <div className={styles.card_container}>
//       <div className={styles.card}>
//         <h2>Create Quiz</h2>
//         <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
//           <div className={styles.input_container}>
//             <label htmlFor="question">Question</label>
//             <Controller
//               name="question"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="question"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Question is required',
//               }}
//             />
//             {errors.question && <p>{errors.question.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label>Options (comma-separated)</label>
//             <div className={styles.options_container}>
//               {[1, 2, 3, 4].map((index) => (
//                 <Controller
//                   key={index}
//                   name={`options[${index - 1}]`}
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => (
//                     <input
//                       type="text"
//                       {...field}
//                       placeholder={`Option ${index}`}
//                     />
//                   )}
//                   rules={{
//                     required: `Option ${index} is required`,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="answer">Answer</label>
//             <Controller
//               name="answer"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="answer"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Answer is required',
//                 validate: validateAnswer, // Use the custom validation rule
//               }}
//             />
//             {errors.answer && <p>{errors.answer.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="image">Image URL</label>
//             <Controller
//               name="image"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="image"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Image URL is required',
//                 validate: (value) => {
//                   if (!isValidURL(value)) {
//                     return 'Invalid image URL';
//                   }
//                   return true;
//                 },
//               }}
//             />
//             {errors.image && <p>{errors.image.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="chosenQuiz">Chosen Quiz (matches Quiz Unique Name)</label>
//             <Controller
//               name="chosenQuiz"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="chosenQuiz"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Chosen Quiz is required',
//               }}
//             />
//             {errors.chosenQuiz && <p>{errors.chosenQuiz.message}</p>}
//           </div>

//           <div>
//             <button className={styles.button} type="submit" disabled={isLoading}>
//               {isLoading ? 'Adding...' : 'Add Quiz'}
//             </button>
//           </div>

//           {isError && <p>Error adding quiz</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default QuizQuestionsForm;

// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import validUrl from 'valid-url';
// import { quizApi } from '../../api/quizApi/quizApi';
// import styles from './QuizQuestionsForm.module.css';

// function QuizQuestionsForm() {
//   const {
//     control, handleSubmit, formState: { errors }, reset,
//   } = useForm();
//   const isValidURL = (url) => validUrl.isUri(url);

//   const onSubmit = async (data) => {
//     console.log('Form data:', data);

//     if (Object.keys(errors).length > 0) {
//       console.error('Form validation errors:', errors);
//       return;
//     }

//     try {
//       if (!isValidURL(data.image)) {
//         console.error('Invalid image URL');
//         return;
//       }
//       const postResponse = await quizApi.post(data);

//       console.log('Quiz added successfully:', postResponse);

//       reset();
//     } catch (error) {
//       console.error('Error adding quiz:', error);
//     }
//   };

//   return (
//     <div className={styles.card_container}>
//       <div className={styles.card}>
//         <h2>Create Quiz</h2>
//         <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
//           <div className={styles.input_container}>
//             <label htmlFor="question">Question</label>
//             <Controller
//               name="question"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="question"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Question is required',
//               }}
//             />
//             {errors.question && <p>{errors.question.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label>Options (comma-separated)</label>
//             <div className={styles.options_container}>
//               {[1, 2, 3, 4].map((index) => (
//                 <Controller
//                   key={index}
//                   name={`options[${index - 1}]`}
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => (
//                     <input
//                       type="text"
//                       {...field}
//                       placeholder={`Option ${index}`}
//                     />
//                   )}
//                   rules={{
//                     required: `Option ${index} is required`,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="answer">Answer</label>
//             <Controller
//               name="answer"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="answer"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Answer is required',
//               }}
//             />
//             {errors.answer && <p>{errors.answer.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="image">Image URL</label>
//             <Controller
//               name="image"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="image"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Image URL is required',
//                 validate: (value) => {
//                   if (!isValidURL(value)) {
//                     return 'Invalid image URL';
//                   }
//                   return true;
//                 },
//               }}
//             />
//             {errors.image && <p>{errors.image.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="chosenQuiz">Chosen Quiz (matches Quiz Unique Name)</label>
//             <Controller
//               name="chosenQuiz"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="chosenQuiz"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Chosen Quiz is required',
//               }}
//             />
//             {errors.chosenQuiz && <p>{errors.chosenQuiz.message}</p>}
//           </div>

//           <div>
//             <button className={styles.button} type="submit">
//               Add Quiz
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default QuizQuestionsForm;

// import React from 'react';
// import { Controller } from 'react-hook-form';
// import validUrl from 'valid-url';
// import useQuizQuestionFormValidation from '../QuizQuestionsFormValidation/QuizQuestionsFormValidation';
// import { quizApi } from '../../api/quizApi/quizApi';
// import styles from './QuizQuestionsForm.module.css';

// function QuizQuestionsForm() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     validationRules, // Get the validation rules from the custom hook
//   } = useQuizQuestionFormValidation(); // Use the custom hook

//   const isValidURL = (url) => validUrl.isUri(url);

//   const renderFormInput = (name, label, type = 'text') => (
//     <div className={styles.input_container}>
//       <label htmlFor={name}>{label}</label>
//       <Controller
//         name={name}
//         control={control}
//         defaultValue=""
//         render={({ field }) => <input type={type} id={name} {...field} />}
//         rules={validationRules[name]}
//       />
//       {errors[name] && <p>{errors[name].message}</p>}
//     </div>
//   );

//   const onSubmit = async (data) => {
//     console.log('Form data:', data);

//     if (Object.keys(errors).length > 0) {
//       console.error('Form validation errors:', errors);
//       return;
//     }

//     if (!isValidURL(data.image)) {
//       console.error('Invalid image URL');
//       return;
//     }

//     try {
//       const postResponse = await quizApi.post(data);

//       console.log('Quiz added successfully:', postResponse);

//       reset();
//     } catch (error) {
//       console.error('Error adding quiz:', error);
//     }
//   };

//   return (
//     <div className={styles.card_container}>
//       <div className={styles.card}>
//         <h2>Create Quiz</h2>
//         <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
//           {renderFormInput('question', 'Question')}
//           <div className={styles.input_container}>
//             <label>Options (comma-separated)</label>
//             <div className={styles.options_container}>
//               {[1, 2, 3, 4].map((index) => (
//                 <Controller
//                   key={index}
//                   name={`options[${index - 1}]`}
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => <input type="text" {...field} placeholder={`Option ${index}`} />}
//                   rules={validationRules.options}
//                 />
//               ))}
//             </div>
//           </div>
//           {renderFormInput('answer', 'Answer')}
//           {renderFormInput('image', 'Image URL')}
//           {renderFormInput('chosenQuiz', 'Chosen Quiz (matches Quiz Unique Name)')}

//           <div>
//             <button className={styles.button} type="submit">
//               Add Quiz
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default QuizQuestionsForm;

import React from 'react';
import { Controller } from 'react-hook-form';
import validUrl from 'valid-url';
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

  const isValidURL = (url) => validUrl.isUri(url);

  // Reusable component for form fields
  function FormField({ name, label }) {
    const isTextArea = name === 'description';

    return (
      <div className={styles.input_container}>
        <label htmlFor={name}>{label}</label>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (isTextArea ? (
            <textarea id={name} {...field} />
          ) : (
            <input type="text" id={name} {...field} />
          ))}
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
      if (!isValidURL(data.image)) {
        console.error('Invalid image URL');
        return;
      }

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
          <FormField name="chosenQuiz" label="Chosen Quiz (matches Quiz Unique Name)" />
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
