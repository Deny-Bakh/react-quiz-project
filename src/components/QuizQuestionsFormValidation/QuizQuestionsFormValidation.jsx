import { useForm } from 'react-hook-form';
import validUrl from 'valid-url';
import imageExists from 'image-exists';
import { useSelector } from 'react-redux';

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
  const quizUniqueName = useSelector((state) => state.quizUniqueName);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    shouldFocusError: true,
  });

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
        if (!options) return true;
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
            return updatedImageUrl === value || 'Image URL is invalid or does not exist';
          } catch (error) {
            return 'Image URL is invalid or does not exist';
          }
        },
      },
    },
    chozenQuiz: {
      required: 'Chosen Quiz is required',
      validate: (value) => value === quizUniqueName || 'Chosen Quiz must match the created Quiz Unique Name',
    },
    options: {
      required: 'Options are required',
      validate: (value) => value.length >= 2 || 'At least 2 options are required',
    },
  };

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    validationRules,
    onSubmit,
  };
}

export default QuizQuestionsFormValidation;
