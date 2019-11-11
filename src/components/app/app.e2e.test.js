import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./app";
import questions from "../../mocks/questions";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";

configure({adapter: new Adapter()});

it(`App (e2e) is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = mount(<App
    time={7}
    errorCount={4}
    questions={questions}
    onStartButtonClick={clickHandler}
  />);

  app.setState({question: -1});
  /* eslint-disable no-console */
  console.log(`--------- app.state..question 0.1 = ${app.state().question}`);
  app.update();
  console.log(`--------- app.state..question 0.2 = ${app.state().question}`);

  let welcomeScreen = app.find(WelcomeScreen);
  expect(welcomeScreen.exists()).toEqual(true);

  const startButton = welcomeScreen.find(`.welcome__button`);
  startButton.simulate(`click`);
  welcomeScreen = app.find(WelcomeScreen);
  expect(welcomeScreen.exists()).toEqual(false);

  const genreQuestionScreen1 = app.find(GenreQuestionScreen);
  expect(genreQuestionScreen1.exists()).toEqual(true);

  const genreButtonForm1 = genreQuestionScreen1.find(`.game__tracks`);
  genreButtonForm1.simulate(`submit`);

  console.log(`--------- app.state..question 1 = ${app.state().question}`);

  const genreQuestionScreen = app.find(GenreQuestionScreen);
  expect(genreQuestionScreen.exists()).toEqual(true);
  const genreButtonForm = genreQuestionScreen.find(`.game__tracks`);
  genreButtonForm.simulate(`submit`);

  console.log(`--------- app.state..question 2 = ${app.state().question}`);

  const artistQuestionScreen = app.find(ArtistQuestionScreen);
  expect(artistQuestionScreen.exists()).toEqual(true);
  const artistRadioButton = artistQuestionScreen.find(`.artist__input`).at(0);
  artistRadioButton.simulate(`change`, {target: {checked: true}});
  welcomeScreen = app.find(WelcomeScreen);
  expect(welcomeScreen.exists()).toEqual(true);

  console.log(`--------- app.state..question 3 = ${app.state().question}`);
});

