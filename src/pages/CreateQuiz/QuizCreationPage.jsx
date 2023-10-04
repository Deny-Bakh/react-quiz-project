// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { useAddQuizMutation } from '../../api/quizes/quizes';

// function CreateQuiz() {
//   const { control, handleSubmit, formState: { errors } } = useForm();
//   const [addQuiz, { isLoading, isError }] = useAddQuizMutation();

//   const onSubmit = async (data) => {
//     console.log('Form data:', data);
//     if (Object.keys(errors).length > 0) {
//       console.error('Form validation errors:', errors);
//       return;
//     }

//     try {
//       const response = await addQuiz(data).unwrap();
//       console.log('Quiz added successfully:', response);
//     } catch (error) {
//       // Handle error, e.g., display an error message
//       console.error('Error adding quiz:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Quiz</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="quizName">Quiz Name</label>
//           <Controller
//             name="quizName"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <input
//                 type="text"
//                 id="quizName"
//                 {...field}
//               />
//             )}
//             rules={{ required: 'Quiz Name is required' }}
//           />
//           {errors.quizName && <p>{errors.quizName.message}</p>}
//         </div>

//         {/* Add more form fields here */}

//         <div>
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Adding...' : 'Add Quiz'}
//           </button>
//         </div>

//         {isError && <p>Error adding quiz</p>}
//       </form>
//     </div>
//   );
// }

// export default CreateQuiz;

// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { useAddQuizMutation } from '../../api/quizes/quizes';
// import styles from './CreateQuiz.module.css';

// function CreateQuiz() {
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
//       return;
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

// export default CreateQuiz;

// ***************************************************************************************************

// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import validUrl from 'valid-url'; // Import the valid-url package
// import { useAddQuizMutation } from '../../api/quizes/quizes';
// import styles from './CreateQuiz.module.css';

// function CreateQuiz() {
//   const {
//     control, handleSubmit, formState: { errors }, reset,
//   } = useForm();
//   const [addQuiz, { isLoading, isError }] = useAddQuizMutation();
//   const [imageError, setImageError] = useState(false);

//   const isValidURL = (url) => validUrl.isUri(url);

//   const onSubmit = async (data) => {
//     console.log('Form data:', data);

//     if (Object.keys(errors).length > 0) {
//       console.error('Form validation errors:', errors);
//       return;
//     }

//     try {
//       if (!isValidURL(data.image) || !isValidURL(data.background)) {
//         console.error('Invalid URL');
//         setImageError(true);
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
//         <h2>Create Quiz</h2>
//         <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
//           {/* ... rest of the form */}
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
//               }}
//             />
//             {errors.image && <p>{errors.image.message}</p>}
//             {imageError && <p>Invalid URL</p>}
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
//               rules={{
//                 required: 'Background URL is required',
//               }}
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

// export default CreateQuiz;

// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import validUrl from 'valid-url'; // Import the valid-url package
// import { useAddQuizMutation } from '../../api/quizes/quizes';
// import styles from './CreateQuiz.module.css';

// function CreateQuiz() {
//   const {
//     control, handleSubmit, formState: { errors }, reset,
//   } = useForm();
//   const [addQuiz, { isLoading, isError }] = useAddQuizMutation();
//   const [imageError, setImageError] = useState(false);
//   const [backgroundError, setBackgroundError] = useState(false);

//   const isValidURL = (url) => validUrl.isUri(url);

//   const checkURLAvailability = async (url) => {
//     try {
//       const response = await fetch(url);
//       return response.ok;
//     } catch (error) {
//       return false;
//     }
//   };

//   const onSubmit = async (data) => {
//     console.log('Form data:', data);

//     if (Object.keys(errors).length > 0) {
//       console.error('Form validation errors:', errors);
//       return;
//     }

//     try {
//       const isImageURLValid = isValidURL(data.image);
//       const isBackgroundURLValid = isValidURL(data.background);

//       if (!isImageURLValid) {
//         console.error('Invalid image URL');
//         setImageError(true);
//         return;
//       }

//       if (!isBackgroundURLValid) {
//         console.error('Invalid background URL');
//         setBackgroundError(true);
//         return;
//       }

//       const isImageURLAvailable = await checkURLAvailability(data.image);
//       const isBackgroundURLAvailable = await checkURLAvailability(data.background);

//       if (!isImageURLAvailable) {
//         console.error('Image URL does not exist');
//         setImageError(true);
//         return;
//       }

//       if (!isBackgroundURLAvailable) {
//         console.error('Background URL does not exist');
//         setBackgroundError(true);
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
//               rules={{
//                 required: 'Quiz Name is required',
//               }}
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
//               rules={{
//                 required: 'Description is required',
//               }}
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
//               rules={{
//                 required: 'Quiz Unique Name is required',
//                 pattern: {
//                   value: /^[a-z0-9]+$/,
//                   message: 'Invalid quiz unique name (only lowercase letters and numbers allowed)',
//                 },
//               }}
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
//             {imageError && <p>Invalid or unavailable image URL</p>}
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
//               rules={{
//                 required: 'Background URL is required',
//                 validate: (value) => {
//                   if (!isValidURL(value)) {
//                     return 'Invalid background URL';
//                   }
//                   return true;
//                 },
//               }}
//             />
//             {errors.background && <p>{errors.background.message}</p>}
//             {backgroundError && <p>Invalid or unavailable background URL</p>}
//           </div>

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
//             <label htmlFor="questionImage">Question Image URL</label>
//             <Controller
//               name="questionImage"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   id="questionImage"
//                   {...field}
//                 />
//               )}
//               rules={{
//                 required: 'Question Image URL is required',
//                 validate: (value) => {
//                   if (!isValidURL(value)) {
//                     return 'Invalid question image URL';
//                   }
//                   return true;
//                 },
//               }}
//             />
//             {errors.questionImage && <p>{errors.questionImage.message}</p>}
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

// export default CreateQuiz;

// ParentComponent.js
// import React, { useState } from 'react';
// import QuizDetailsForm from '../../components/QuizDetailsForm/QuizDetailsForm';
// import QuizQuestionsForm from '../../components/QuizQuestionsForm/QuizQuestionsForm';

// function ParentComponent() {
//   const [showQuizQuestionsForm, setShowQuizQuestionsForm] = useState(false);

//   const handleQuizDetailsSubmit = () => {
//     setShowQuizQuestionsForm(true);
//   };

//   return (
//     <div>
//       <h1>Create Quiz</h1>
//       {showQuizQuestionsForm ? (
//         <QuizQuestionsForm />
//       ) : (
//         <QuizDetailsForm onSubmit={handleQuizDetailsSubmit} />
//       )}
//     </div>
//   );
// }

// export default ParentComponent;

// QuizCreationPage.js

import React from 'react';
// import QuizDetailsForm from '../../components/QuizDetailsForm/QuizDetailsForm';
import QuizQuestionsForm from '../../components/QuizQuestionsForm/QuizQuestionsForm';

function QuizCreationPage() {
  return (
    <QuizQuestionsForm />
    // <QuizDetailsForm />
  );
}

export default QuizCreationPage;
