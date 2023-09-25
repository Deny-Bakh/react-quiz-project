import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardWrapper,
  Card,
  QuizImage,
  BackgroundColor,
  Name,
  Description,
  Button,
  Flex,
} from './styled';
import QuizModal from '../QuizModal/QuizModal';

export default function QuizCard({ quiz }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStartQuiz = () => {
    navigate(`/quiz-page/${quiz.quizUniqueName}`);
  };

  return (
    <CardWrapper>
      <Card style={{ backgroundImage: `url(${quiz.background})` }}>
        <QuizImage src={quiz.image} alt={quiz.name} />
        <BackgroundColor>
          <Name>{quiz.quiz}</Name>
          <Description>{quiz.description.slice(0, 50)}...</Description>
        </BackgroundColor>
        <Flex>
          <Button type="button" onClick={handleStartQuiz}>
            Start Quiz
          </Button>
          <Button type="button" onClick={handleShowMore}>
            Show More
          </Button>
        </Flex>
      </Card>
      {isModalOpen && (
        <QuizModal quiz={quiz} onClose={handleCloseModal} />
      )}
    </CardWrapper>
  );
}
