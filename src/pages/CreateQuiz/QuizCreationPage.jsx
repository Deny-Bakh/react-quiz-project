import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuizDetailsForm from '../../components/QuizDetailsForm/QuizDetailsForm';
import QuizQuestionsForm from '../../components/QuizQuestionsForm/QuizQuestionsForm';
import { setQuizUniqueName, selectQuizUniqueName } from '../../store/quizUniqueName/reducer';

function QuizCreationPage() {
  const dispatch = useDispatch();
  const quizUniqueName = useSelector(selectQuizUniqueName);

  const [showQuestionsForm, setShowQuestionsForm] = useState(false);

  const handleQuizDetailsSubmit = (createdQuizUniqueName) => {
    dispatch(setQuizUniqueName(createdQuizUniqueName));
    setShowQuestionsForm(true);
  };

  return (
    <div>
      {!showQuestionsForm ? (
        <QuizDetailsForm onFormSubmit={handleQuizDetailsSubmit} />
      ) : (
        <QuizQuestionsForm quizUniqueName={quizUniqueName} />
      )}
    </div>
  );
}

export default QuizCreationPage;
