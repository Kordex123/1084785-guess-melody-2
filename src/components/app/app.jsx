import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import React, {Component} from "react";
import PropTypes from 'prop-types';
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";

class App extends Component {
  static getScreen(question, props, onUserAnswer) {
    // eslint-disable-next-line no-console
    // console.log(`------- questionn: ${question}`);
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return (<WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />);
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`:
        return (<GenreQuestionScreen
          screenIndex = {question}
          question={questions[question]}
          onAnswer={onUserAnswer}
        />);
      case `artist`:
        return (<ArtistQuestionScreen
          screenIndex = {question}
          question={currentQuestion}
          onAnswer={onUserAnswer}
        />);
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {
      questions,
    } = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}


App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  questions: PropTypes.arrayOf(PropTypes.object)
};

export default App;
