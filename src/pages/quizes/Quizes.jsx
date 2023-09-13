import React, { Component } from "react";
import { quizes } from "../../api/quizes/quizes";
import { CardContainer } from "./styled";
import Card from "../../components/QuizCard/QuizCard";

class Quizes extends Component {
  state = {
    quizzes: [],
    error: '',
  };

  componentDidMount() {
    this.fetchQuizList();
  }

  async fetchQuizList() {
    try {
      const response = await quizes.get();
      this.setState({ quizzes: response, error: '' });
    } catch (err) {
      console.log(err);
      this.setState({ error: err });
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.someProp !== this.props.someProp) {
  //     this.fetchQuizList();
  //   }
  // }

  render() {
    const { quizzes, error } = this.state;

    if (error) return <p>{error}</p>;

    return (
      <CardContainer>
        {quizzes.map((quiz) => (
          <Card key={quiz.id} quiz={quiz} />
        ))}
      </CardContainer>
    );
  }
}

export default Quizes;

// import React, { Component } from "react";
// import { quizes } from "../../api/quizes/quizes";
// import { CardContainer } from "./styled";
// import Card from "../../components/QuizCard/QuizCard";

// class Quizes extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quizzes: [],
//       error: '',
//     };
//   }

//   componentDidMount() {
//     this.fetchQuizList();
//   }

//   async fetchQuizList() {
//     try {
//       const response = await quizes.get();
//       this.setState({ quizzes: response, error: '' });
//     } catch (err) {
//       console.log(err);
//       this.setState({ error: err });
//     }
//   }

//   // componentDidUpdate(prevProps) {
//   //   if (prevProps.someProp !== this.props.someProp) {
//   //     this.fetchQuizList();
//   //   }
//   // }

//   render() {
//     const { quizzes, error } = this.state;

//     if (error) return <p>{error}</p>;

//     return (
//       <CardContainer>
//         {quizzes.map((quiz) => (
//           <Card key={quiz.id} quiz={quiz} />
//         ))}
//       </CardContainer>
//     );
//   }
// }

// export default Quizes;
