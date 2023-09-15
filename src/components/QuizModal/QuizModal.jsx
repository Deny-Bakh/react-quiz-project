import React from "react";
import StartQuiz from "../StartQuiz/StartQuiz";
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

// import React, { Component } from 'react';
// import StartQuiz from '../StartQuiz/StartQuiz';
// import {
//   ModalWrapper,
//   ModalContent,
//   QuizImage,
//   BackgroundColor,
//   Name,
//   Description,
//   StartButton,
//   Flex,
//   CloseButton,
// } from "./styled";

// class QuizModal extends Component {
//   constructor(props) {
//     super(props);
//     const { quiz, onClose } = this.props;
//     this.quiz = quiz;
//     this.onClose = onClose;
//   }

//   handleStartQuizClick = () => {
//     this.onClose();
//     setTimeout(() => {
//       StartQuiz();
//     }, 300);
//   }

//   render() {
//     return (
//       <ModalWrapper>
//         <ModalContent>
//           <CloseButton onClick={this.onClose}>X</CloseButton>
//           <QuizImage src={this.quiz.image} alt={this.quiz.name} />
//           <BackgroundColor>
//             <Name>{this.quiz.quiz}</Name>
//             <Description>{this.quiz.description}</Description>
//           </BackgroundColor>
//           <Flex>
//             <StartButton type="button" onClick={this.handleStartQuizClick}>
//               Start Quiz
//             </StartButton>
//           </Flex>
//         </ModalContent>
//       </ModalWrapper>
//     );
//   }
// }

// export default QuizModal;

// import React, { Component } from "react";
// import StartQuiz from "../StartQuiz/StartQuiz";
// import {
//   ModalWrapper,
//   ModalContent,
//   QuizImage,
//   BackgroundColor,
//   Name,
//   Description,
//   StartButton,
//   Flex,
//   CloseButton,
// } from "./styled";

// class QuizModal extends Component {
//   quiz = this.props.quiz;

//   onClose = this.props.onClose;

//   handleStartQuizClick = () => {
//     this.onClose();
//     setTimeout(() => {
//       StartQuiz();
//     }, 300);
//   };

//   render() {
//     return (
//       <ModalWrapper>
//         <ModalContent>
//           <CloseButton onClick={this.onClose}>X</CloseButton>
//           <QuizImage src={this.quiz.image} alt={this.quiz.name} />
//           <BackgroundColor>
//             <Name>{this.quiz.quiz}</Name>
//             <Description>{this.quiz.description}</Description>
//           </BackgroundColor>
//           <Flex>
//             <StartButton type="button" onClick={this.handleStartQuizClick}>
//               Start Quiz
//             </StartButton>
//           </Flex>
//         </ModalContent>
//       </ModalWrapper>
//     );
//   }
// }

// export default QuizModal;
