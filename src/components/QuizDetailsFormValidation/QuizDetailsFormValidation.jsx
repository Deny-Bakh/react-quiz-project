// import { useForm } from 'react-hook-form';

// function useQuizDetailsFormValidation() {
//   const {
//     control, handleSubmit, formState: { errors }, reset,
//   } = useForm();

//   const validationRules = {
//     quiz: {
//       required: 'Quiz Name is required',
//     },
//     description: {
//       required: 'Description is required',
//     },
//     quizUniqueName: {
//       required: 'Quiz Unique Name is required',
//       pattern: {
//         value: /^[a-z0-9]+$/,
//         message: 'Invalid quiz unique name (only lowercase letters and numbers allowed)',
//       },
//     },
//     image: {
//       required: 'Image URL is required',
//       validate: (value) => {
//         const pattern = /^(https?|http):\/\/.+/i;
//         if (!pattern.test(value)) {
//           return 'Invalid image URL';
//         }
//         return true;
//       },
//     },
//     background: {
//       required: 'Background URL is required',
//       validate: (value) => {
//         const pattern = /^(https?|http):\/\/.+/i;
//         if (!pattern.test(value)) {
//           return 'Invalid background URL';
//         }
//         return true;
//       },
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

// export default useQuizDetailsFormValidation;

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

function useQuizDetailsFormValidation() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validateURL = (value) => {
    if (!validUrl.isUri(value)) {
      return 'Invalid URL';
    }
    return true;
  };

  const validationRules = {
    quiz: {
      required: 'Quiz Name is required',
    },
    description: {
      required: 'Description is required',
    },
    quizUniqueName: {
      required: 'Quiz Unique Name is required',
      pattern: {
        value: /^[a-z0-9]+$/,
        message: 'Invalid quiz unique name (only lowercase letters and numbers allowed)',
      },
    },
    image: {
      required: 'Image URL is required',
      validate: {
        isURL: validateURL,
        exists: async (value) => {
          try {
            const updatedImageUrl = await checkAndUpdateImageUrl(value);
            return updatedImageUrl === value || 'Image URL is invalid or does not exist';
          } catch (error) {
            return 'Image URL is invalid or does not exist';
          }
        },
      },
    },
    background: {
      required: 'Background URL is required',
      validate: {
        isURL: validateURL,
        exists: async (value) => {
          try {
            const updatedImageUrl = await checkAndUpdateImageUrl(value);
            return updatedImageUrl === value || 'Background URL is invalid or does not exist';
          } catch (error) {
            return 'Background URL is invalid or does not exist';
          }
        },
      },
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

export default useQuizDetailsFormValidation;
