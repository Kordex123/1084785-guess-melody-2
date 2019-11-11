import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";
import questions from "../../mocks/questions";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      gameTime={7}
      errorCount={4}
      questions={questions}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

