import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from "./genre-question-screen";
import questions from "../../mocks/questions";
configure({adapter: new Adapter()});

it(`GenreQuestionScreen (e2e) is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const genreQuestionScreen = mount(<GenreQuestionScreen
    screenIndex={0}
    question={questions[0]}
    onAnswer={clickHandler}
  />);

  const submitButton = genreQuestionScreen.find(`.game__tracks`);
  submitButton.simulate(`submit`);

  expect(clickHandler).toHaveBeenCalledWith([]);
});

