// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { useAddQuizMutation } from '../../api/quizes/quizes';
// import styles from './QuizDetailsForm.module.css';

// function QuizDetailsForm({ onFormSubmit }) {
//   const {
//     control, handleSubmit, formState: { errors }, reset,
//   } = useForm();
//   const [addQuiz, { isLoading, isError }] = useAddQuizMutation();

//   const isValidURL = (url) => {
//     const pattern = /^(https?|http):\/\/.+/i;
//     return pattern.test(url);
//   };

//   const onSubmit = async (data) => {
//     console.log('Form data:', data);

//     if (Object.keys(errors).length > 0) {
//       console.error('Form validation errors:', errors);
//       onFormSubmit();
//       // return;
//     }

//     try {
//       const isImageURLValid = isValidURL(data.image);
//       const isBackgroundURLValid = isValidURL(data.background);

//       if (!isImageURLValid) {
//         console.error('Invalid image URL');
//         return;
//       }

//       if (!isBackgroundURLValid) {
//         console.error('Invalid background URL');
//         return;
//       }

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
//       <h2>Create Quiz</h2>
//       <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
//         <div className={styles.input_container}>
//           <label htmlFor="quiz">Quiz Name</label>
//           <Controller
//             name="quiz"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <input
//                 type="text"
//                 id="quiz"
//                 {...field}
//               />
//             )}
//             rules={{
//               required: 'Quiz Name is required',
//             }}
//           />
//           {errors.quiz && <p>{errors.quiz.message}</p>}
//         </div>

//         <div className={styles.input_container}>
//           <label htmlFor="description">Description</label>
//           <Controller
//             name="description"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <textarea
//                 id="description"
//                 {...field}
//               />
//             )}
//             rules={{
//               required: 'Description is required',
//             }}
//           />
//           {errors.description && <p>{errors.description.message}</p>}
//         </div>

//         <div className={styles.input_container}>
//           <label htmlFor="quizUniqueName">Quiz Unique Name</label>
//           <Controller
//             name="quizUniqueName"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <input
//                 type="text"
//                 id="quizUniqueName"
//                 {...field}
//               />
//             )}
//             rules={{
//               required: 'Quiz Unique Name is required',
//               pattern: {
//                 value: /^[a-z0-9]+$/,
//                 message: 'Invalid quiz unique name (only lowercase letters and numbers allowed)',
//               },
//             }}
//           />
//           {errors.quizUniqueName && <p>{errors.quizUniqueName.message}</p>}
//         </div>

//         <div className={styles.input_container}>
//           <label htmlFor="image">Image URL</label>
//           <Controller
//             name="image"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <input
//                 type="text"
//                 id="image"
//                 {...field}
//               />
//             )}
//             rules={{
//               required: 'Image URL is required',
//               validate: (value) => {
//                 if (!isValidURL(value)) {
//                   return 'Invalid image URL';
//                 }
//                 return true;
//               },
//             }}
//           />
//           {errors.image && <p>{errors.image.message}</p>}
//         </div>

//         <div className={styles.input_container}>
//           <label htmlFor="background">Background URL</label>
//           <Controller
//             name="background"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <input
//                 type="text"
//                 id="background"
//                 {...field}
//               />
//             )}
//             rules={{
//               required: 'Background URL is required',
//               validate: (value) => {
//                 if (!isValidURL(value)) {
//                   return 'Invalid background URL';
//                 }
//                 return true;
//               },
//             }}
//           />
//           {errors.background && <p>{errors.background.message}</p>}
//         </div>

//         <div>
//           <button className={styles.button} type="submit" disabled={isLoading}>
//             {isLoading ? 'Adding...' : 'Add Quiz'}
//           </button>
//         </div>

//         {isError && <p>Error adding quiz</p>}
//       </form>
//     </div>
//     </div>
//   );
// }

// export default QuizDetailsForm;

// import React from 'react';
// import { Controller } from 'react-hook-form';
// import useQuizDetailsFormValidation from '../QuizDetailsFormValidation/QuizDetailsFormValidation';
// import { useAddQuizMutation } from '../../api/quizes/quizes';
// import styles from './QuizDetailsForm.module.css';

// function QuizDetailsForm({ onFormSubmit }) {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     validationRules, // Get the validation rules from the custom hook
//   } = useQuizDetailsFormValidation(); // Use the custom hook

//   const [addQuiz, { isLoading, isError }] = useAddQuizMutation();

//   const onSubmit = async (data) => {
//     console.log('Form data:', data);

//     if (Object.keys(errors).length > 0) {
//       console.error('Form validation errors:', errors);
//       onFormSubmit();
//       return;
//     }

//     try {
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
//           <div className={styles.input_container}>
//             <label htmlFor="quiz">Quiz Name</label>
//             <Controller
//               name="quiz"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="quiz"
//                   {...field}
//                 />
//               )}
//               rules={validationRules.quiz} // Apply validation rules for "quiz"
//             />
//             {errors.quiz && <p>{errors.quiz.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="description">Description</label>
//             <Controller
//               name="description"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <textarea
//                   id="description"
//                   {...field}
//                 />
//               )}
//               rules={validationRules.description} // Apply validation rules for "description"
//             />
//             {errors.description && <p>{errors.description.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="quizUniqueName">Quiz Unique Name</label>
//             <Controller
//               name="quizUniqueName"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="quizUniqueName"
//                   {...field}
//                 />
//               )}
//               rules={validationRules.quizUniqueName} // Apply validation rules for "quizUniqueName"
//             />
//             {errors.quizUniqueName && <p>{errors.quizUniqueName.message}</p>}
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
//               rules={validationRules.image} // Apply validation rules for "image"
//             />
//             {errors.image && <p>{errors.image.message}</p>}
//           </div>

//           <div className={styles.input_container}>
//             <label htmlFor="background">Background URL</label>
//             <Controller
//               name="background"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="background"
//                   {...field}
//                 />
//               )}
//               rules={validationRules.background} // Apply validation rules for "background"
//             />
//             {errors.background && <p>{errors.background.message}</p>}
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

// export default QuizDetailsForm;

import React from 'react';
import { Controller } from 'react-hook-form';
import useQuizDetailsFormValidation from '../QuizDetailsFormValidation/QuizDetailsFormValidation';
import { useAddQuizMutation } from '../../api/quizes/quizes';
import styles from './QuizDetailsForm.module.css';

// Reusable component for form fields
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
        rules={rules} // Apply validation rules
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
      onFormSubmit();
      return;
    }

    try {
      const response = await addQuiz(data).unwrap();

      console.log('Quiz added successfully:', response);

      reset();
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
