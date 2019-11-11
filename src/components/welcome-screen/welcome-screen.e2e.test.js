import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-screen";

configure({adapter: new Adapter()});

it(`WelcomeScreen (e2e) is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const welcome = shallow(<WelcomeScreen
    time={7}
    errorCount={4}
    onStartButtonClick={clickHandler}
  />);

  const startButton = welcome.find(`.welcome__button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
