import React from 'react';
import './MainScreen.css';
import PeopleInfo from './PeopleInfo';

function MainScreen() {
  return <div className = 'main-div'>
      <PeopleInfo number={3}></PeopleInfo>
  </div>
}

export default MainScreen;
