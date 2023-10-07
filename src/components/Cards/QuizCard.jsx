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
import { useToggleFavoriteMutation } from '../../api/quizes/quizes';

export default function QuizCard({ quiz }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStartQuiz = () => {
    navigate(`/quiz-page/${quiz.quizUniqueName}`);
  };

  const [
    updatePost,
  ] = useToggleFavoriteMutation();

  const handleToggleFavorite = () => {
    updatePost({ id: quiz.id, favorite: !quiz.favorite });
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
          <Button
            type="button"
            onClick={handleToggleFavorite}
            style={{
              backgroundColor: quiz.favorite ? 'red' : 'green',
            }}
          >
            {quiz.favorite ? 'Remove Favorite' : 'Add Favorite'}
          </Button>
          <Button type="button" onClick={handleOpenModal}>
            Show More
          </Button>
        </Flex>
      </Card>
      {isModalOpen && <QuizModal quiz={quiz} onClose={handleCloseModal} />}
    </CardWrapper>
  );
}
