// import React, { useState } from "react";
// import StartQuiz from "../StartQuiz/StartQuiz";
// import {
//   CardWrapper,
//   Card,
//   QuizImage,
//   BackgroundColor,
//   Name,
//   Description,
//   Button,
//   Flex,
// } from "./styled";
// import QuizModal from "../QuizModal/QuizModal";

// export default function QuizCard({ quiz }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleShowMore = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <CardWrapper>
//       <Card style={{ backgroundImage: `url(${quiz.background})` }}>
//         <QuizImage src={quiz.image} alt={quiz.name} />
//         <BackgroundColor>
//           <Name>{quiz.quiz}</Name>
//           <Description>{quiz.description.slice(0, 50)}...</Description>
//         </BackgroundColor>
//         <Flex>
//           <Button type="button" onClick={StartQuiz}>Start Quiz</Button>
//           <Button type="button" onClick={handleShowMore}>
//             Show More
//           </Button>
//         </Flex>
//       </Card>
//       {isModalOpen && (
//         <QuizModal quiz={quiz} onClose={handleCloseModal} />
//       )}
//     </CardWrapper>
//   );
// }

// import React, { useState } from "react";
// import StartQuiz from "../StartQuiz/StartQuiz"; // Import statement should be removed
// import {
//   CardWrapper,
//   Card,
//   QuizImage,
//   BackgroundColor,
//   Name,
//   Description,
//   Button,
//   Flex,
// } from "./styled";
// import QuizModal from "../QuizModal/QuizModal";

// export default function QuizCard({ quiz }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleShowMore = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <CardWrapper>
//       <Card style={{ backgroundImage: `url(${quiz.background})` }}>
//         <QuizImage src={quiz.image} alt={quiz.name} />
//         <BackgroundColor>
//           <Name>{quiz.quiz}</Name>
//           <Description>{quiz.description.slice(0, 50)}...</Description>
//         </BackgroundColor>
//         <Flex>
//           {/* The onClick handler should be handleStartQuiz, not StartQuiz */}
//           <Button type="button" onClick={StartQuiz}>Start Quiz</Button>
//           <Button type="button" onClick={handleShowMore}>
//             Show More
//           </Button>
//         </Flex>
//       </Card>
//       {isModalOpen && (
//         <QuizModal quiz={quiz} onClose={handleCloseModal} />
//       )}
//     </CardWrapper>
//   );
// }


import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardWrapper,
  Card,
  QuizImage,
  BackgroundColor,
  Name,
  Description,
  Button,
  Flex,
} from "./styled";
import QuizModal from "../QuizModal/QuizModal";
import QuizQuestion from "../QuizQuestion/QuizQuestion";
import QuestionData from "../../components/QuizQuestion/QuestionData";

export default function QuizCard({ quiz }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <Link to={`/quiz/${quiz.id}`}>
            <Button type="button">Start Quiz</Button>
          </Link>
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
