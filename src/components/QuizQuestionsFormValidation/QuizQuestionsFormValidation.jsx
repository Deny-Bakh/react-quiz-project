// import { useForm } from 'react-hook-form';
// import validUrl from 'valid-url';

// function useQuizQuestionFormValidation() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();
//   const isValidURL = (url) => validUrl.isUri(url);

//   const validationRules = {
//     question: {
//       required: 'Question is required',
//     },
//     options: {
//       required: 'All options are required',
//       validate: (value) => value.filter(Boolean).length >= 2 || 'At least two options are required',
//     },
//     answer: {
//       required: 'Answer is required',
//     },
//     image: {
//       required: 'Image URL is required',
//       validate: (value) => {
//         if (!isValidURL(value)) {
//           return 'Invalid image URL';
//         }
//         return true;
//       },
//     },
//     chosenQuiz: {
//       required: 'Chosen Quiz is required',
//     },
//   };

//   return {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     validationRules,
//   };
// }

// export default useQuizQuestionFormValidation;

// useQuizQuestionFormValidation.js
// useQuizQuestionFormValidation.js
// import { useForm } from 'react-hook-form';
// import validUrl from 'valid-url';

// function useQuizQuestionFormValidation() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   // Custom validation rule to check if a value is a valid URL
//   const validateURL = (value) => {
//     if (!validUrl.isUri(value)) {
//       return 'Invalid URL';
//     }
//     return true;
//   };

//   const validationRules = {
//     question: {
//       required: 'Question is required',
//     },
//     answer: {
//       required: 'Answer is required',
//     },
//     image: {
//       required: 'Image URL is required',
//       validate: (value) => {
//         if (!validateURL(value)) {
//           return 'Invalid image URL';
//         }
//         return true;
//       },
//     },
//     chosenQuiz: {
//       required: 'Chosen Quiz is required',
//     },
//     options: {
//       validate: (value) => value.filter((item) => item.trim() !== '').length >= 2 || 'At least 2 options are required',
//     },
//   };

//   return {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     validationRules,
//   };
// }

// export default useQuizQuestionFormValidation;

// import { useForm } from 'react-hook-form';
// import validUrl from 'valid-url';

// function QuizQuestionsFormValidation() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   // Custom validation rule to check if a value is a valid URL
//   const validateURL = (value) => {
//     if (!validUrl.isUri(value)) {
//       return 'Invalid URL';
//     }
//     return true;
//   };

//   const validationRules = {
//     question: {
//       required: 'Question is required',
//     },
//     answer: {
//       required: 'Answer is required',
//       validate: (value, { options }) => {
//         if (!options) return true; // Don't validate if options are not provided
//         return options.includes(value) || 'Answer must match one of the options';
//       },
//     },
//     image: {
//       required: 'Image URL is required',
//       validate: (value) => {
//         if (!validateURL(value)) {
//           return 'Invalid image URL';
//         }
//         return true;
//       },
//     },
//     chosenQuiz: {
//       required: 'Chosen Quiz is required',
//     },
//     options: {
//       required: 'Options are required',
//       validate: (value) => value.length >= 2 || 'At least 2 options are required',
//     },
//   };

//   return {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     validationRules,
//   };
// }

// export default QuizQuestionsFormValidation;

// import { useForm } from 'react-hook-form';
// import validUrl from 'valid-url';
// import imageExists from 'image-exists';

// function checkAndUpdateImageUrl(url) {
//   return new Promise((resolve, reject) => {
//     try {
//       imageExists(url, (exists) => {
//         if (exists) {
//           resolve(url);
//         } else {
//           resolve('https://images3.alphacoders.com/132/1326456.jpeg');
//         }
//       });
//     } catch (error) {
//       reject(new Error('Image URL is invalid or does not exist'));
//     }
//   });
// }

// function QuizQuestionsFormValidation() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   // Custom validation rule to check if a value is a valid URL
//   const validateURL = (value) => {
//     if (!validUrl.isUri(value)) {
//       return 'Invalid URL';
//     }
//     return true;
//   };

//   const validationRules = {
//     question: {
//       required: 'Question is required',
//     },
//     answer: {
//       required: 'Answer is required',
//       validate: (value, { options }) => {
//         if (!options) return true; // Don't validate if options are not provided
//         return options.includes(value) || 'Answer must match one of the options';
//       },
//     },
//     image: {
//       required: 'Image URL is required',
//       validate: {
//         isURL: validateURL,
//         exists: async (value) => {
//           try {
//             const updatedImageUrl = await checkAndUpdateImageUrl(value);
//             return updatedImageUrl === value || 'Image URL is invalid or does not exist';
//           } catch (error) {
//             return 'Image URL is invalid or does not exist';
//           }
//         },
//       },
//     },
//     chosenQuiz: {
//       required: 'Chosen Quiz is required',
//     },
//     options: {
//       required: 'Options are required',
//       validate: (value) => value.length >= 2 || 'At least 2 options are required',
//     },
//   };

//   return {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     validationRules,
//   };
// }

// export default QuizQuestionsFormValidation;

import { useForm } from 'react-hook-form';
import validUrl from 'valid-url';
import imageExists from 'image-exists';

function checkAndUpdateImageUrl(url) {
  return new Promise((resolve, reject) => {
    try {
      imageExists(url, (exists) => {
        if (exists) {
          resolve(url);
        } else {
          resolve('https://images3.alphacoders.com/132/1326456.jpeg');
        }
      });
    } catch (error) {
      reject(new Error('Image URL is invalid or does not exist'));
    }
  });
}

function QuizQuestionsFormValidation() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    shouldFocusError: true, // Add this option to maintain focus
  });

  // Custom validation rule to check if a value is a valid URL
  const validateURL = (value) => {
    if (!validUrl.isUri(value)) {
      return 'Invalid URL';
    }
    return true;
  };

  const validationRules = {
    question: {
      required: 'Question is required',
    },
    answer: {
      required: 'Answer is required',
      validate: (value, { options }) => {
        if (!options) return true; // Don't validate if options are not provided
        return options.includes(value) || 'Answer must match one of the options';
      },
    },
    image: {
      required: 'Image URL is required',
      validate: {
        isURL: validateURL,
        exists: async (value) => {
          try {
            const updatedImageUrl = await checkAndUpdateImageUrl(value);
            if (updatedImageUrl !== value) {
              setError('image', {
                type: 'manual',
                message: 'Image URL is invalid or does not exist',
              });
            }
            return true;
          } catch (error) {
            setError('image', {
              type: 'manual',
              message: 'Image URL is invalid or does not exist',
            });
            return false;
          }
        },
      },
    },
    chosenQuiz: {
      required: 'Chosen Quiz is required',
    },
    options: {
      required: 'Options are required',
      validate: (value) => value.length >= 2 || 'At least 2 options are required',
    },
  };

  return {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    validationRules,
  };
}

export default QuizQuestionsFormValidation;
