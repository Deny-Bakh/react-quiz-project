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

// import React, { Component } from "react";
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

// class QuizCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isModalOpen: false,
//     };
//   }

//   handleShowMore = () => {
//     this.setState({ isModalOpen: true });
//   };

//   handleCloseModal = () => {
//     this.setState({ isModalOpen: false });
//   };

//   render() {
//     const { quiz } = this.props;
//     const { isModalOpen } = this.state;

//     return (
//       <CardWrapper>
//         <Card style={{ backgroundImage: `url(${quiz.background})` }}>
//           <QuizImage src={quiz.image} alt={quiz.name} />
//           <BackgroundColor>
//             <Name>{quiz.quiz}</Name>
//             <Description>{quiz.description.slice(0, 50)}...</Description>
//           </BackgroundColor>
//           <Flex>
//             <Button type="button" onClick={StartQuiz}>
//               Start Quiz
//             </Button>
//             <Button type="button" onClick={this.handleShowMore}>
//               Show More
//             </Button>
//           </Flex>
//         </Card>
//         {isModalOpen && (
//           <QuizModal quiz={quiz} onClose={this.handleCloseModal} />
//         )}
//       </CardWrapper>
//     );
//   }
// }

// export default QuizCard;

// import React, { Component } from "react";
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
// import StartQuiz from "../StartQuiz/StartQuiz";

// class QuizCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isModalOpen: false,
//     };

//     this.handleShowMore = this.handleShowMore.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//   }

//   handleShowMore() {
//     this.setState({ isModalOpen: true });
//   }

//   handleCloseModal() {
//     this.setState({ isModalOpen: false });
//   }

//   render() {
//     const { quiz } = this.props;
//     const { isModalOpen } = this.state;

//     return (
//       <CardWrapper>
//         <Card style={{ backgroundImage: `url(${quiz.background})` }}>
//           <QuizImage src={quiz.image} alt={quiz.name} />
//           <BackgroundColor>
//             <Name>{quiz.quiz}</Name>
//             <Description>{quiz.description.slice(0, 50)}...</Description>
//           </BackgroundColor>
//           <Flex>
//             <Button type="button" onClick={StartQuiz}>Start Quiz</Button>
//             <Button type="button" onClick={this.handleShowMore}>
//               Show More
//             </Button>
//           </Flex>
//         </Card>
//         {isModalOpen && (
//           <QuizModal quiz={quiz} onClose={this.handleCloseModal} />
//         )}
//       </CardWrapper>
//     );
//   }
// }

// export default QuizCard;


import React, { Component } from "react";
import StartQuiz from "../../components/StartQuiz/StartQuiz";
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

class QuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.handleShowMore = this.handleShowMore.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
  }

  handleShowMore() {
    this.setState({ isModalOpen: true });
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  handleStartQuiz() {
    StartQuiz();
  }

  render() {
    const { quiz } = this.props;
    const { isModalOpen } = this.state;

    return (
      <CardWrapper>
        <Card style={{ backgroundImage: `url(${quiz.background})` }}>
          <QuizImage src={quiz.image} alt={quiz.name} />
          <BackgroundColor>
            <Name>{quiz.quiz}</Name>
            <Description>{quiz.description.slice(0, 50)}...</Description>
          </BackgroundColor>
          <Flex>
            <Button type="button" onClick={this.handleStartQuiz}>
              Start Quiz
            </Button>
            <Button type="button" onClick={this.handleShowMore}>
              Show More
            </Button>
          </Flex>
        </Card>
        {isModalOpen && (
          <QuizModal quiz={quiz} onClose={this.handleCloseModal} />
        )}
      </CardWrapper>
    );
  }
}

export default QuizCard;


// import React, { Component } from "react";
// import StartQuiz from "../../components/StartQuiz/StartQuiz";
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

// class QuizCard extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   handleShowMore = () => {
//     this.setState({ isModalOpen: true });
//   };

//   handleCloseModal = () => {
//     this.setState({ isModalOpen: false });
//   };

//   handleStartQuiz = () => {
//     StartQuiz();
//   };

//   render() {
//     const { quiz } = this.props;
//     const { isModalOpen } = this.state;

//     return (
//       <CardWrapper>
//         <Card style={{ backgroundImage: `url(${quiz.background})` }}>
//           <QuizImage src={quiz.image} alt={quiz.name} />
//           <BackgroundColor>
//             <Name>{quiz.quiz}</Name>
//             <Description>{quiz.description.slice(0, 50)}...</Description>
//           </BackgroundColor>
//           <Flex>
//             <Button type="button" onClick={this.handleStartQuiz}>
//               Start Quiz
//             </Button>
//             <Button type="button" onClick={this.handleShowMore}>
//               Show More
//             </Button>
//           </Flex>
//         </Card>
//         {isModalOpen && (
//           <QuizModal quiz={quiz} onClose={this.handleCloseModal} />
//         )}
//       </CardWrapper>
//     );
//   }
// }

// export default QuizCard;
