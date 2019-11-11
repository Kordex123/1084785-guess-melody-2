import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from "./artist-question-screen";
import questions from "../../mocks/questions";
configure({adapter: new Adapter()});

it(`ArtistQuestionScreen (e2e) is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const genreQuestionScreen = mount(<ArtistQuestionScreen
    screenIndex={2}
    question={questions[2]}
    onAnswer={clickHandler}
  />);

  const artistId = `answer-20`;
  const changeButton = genreQuestionScreen.find(`.game__artist`);
  changeButton.simulate(`change`, {target: {value: artistId}});
  expect(clickHandler).toHaveBeenCalledWith(artistId);
});

