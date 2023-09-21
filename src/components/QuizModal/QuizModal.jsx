import React from 'react';
import { Link } from 'react-router-dom';
import {
  ModalWrapper,
  ModalContent,
  QuizImage,
  QuizTime,
  BackgroundColor,
  Name,
  Description,
  StartButton,
  Flex,
  CloseButton,
} from './styled';

export default function QuizModal({ quiz, onClose }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <QuizImage src={quiz.image} alt={quiz.name} />
        <BackgroundColor>
          <Name>{quiz.quiz}</Name>
          <Description>{quiz.description}</Description>
          <QuizTime>3 Minutes To Complete The Quiz</QuizTime>
        </BackgroundColor>
        <Flex>
          <Link to={`/quiz-page/${quiz.quizUniqueName}`}>
            <StartButton type="button">Start Quiz</StartButton>
          </Link>
        </Flex>
      </ModalContent>
    </ModalWrapper>
  );
}
