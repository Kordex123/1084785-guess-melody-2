import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import React from "react";
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount} />;
};

App.propTypes = {
  gameTime: PropTypes.time,
  errorCount: PropTypes.number
};

export default App;
