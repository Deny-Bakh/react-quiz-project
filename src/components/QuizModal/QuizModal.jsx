import React from 'react';
import StartQuiz from '../StartQuiz/StartQuiz';
import {
  ModalWrapper,
  ModalContent,
  QuizImage,
  BackgroundColor,
  Name,
  Description,
  StartButton,
  Flex,
  CloseButton,
} from "./styled";

export default function QuizModal({ quiz, onClose }) {

    function handleStartQuizClick() {
        onClose();
        setTimeout(() => {
            StartQuiz();
          }, 300);
      }
    
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <QuizImage src={quiz.image} alt={quiz.name} />
        <BackgroundColor>
          <Name>{quiz.quiz}</Name>
          <Description>{quiz.description}</Description>
        </BackgroundColor>
        <Flex>
          <StartButton type="button" onClick={handleStartQuizClick}>
            Start Quiz
          </StartButton>
        </Flex>
      </ModalContent>
    </ModalWrapper>
  );
}

