import React from 'react';
import './MainScreen.css';
import PeopleInfo from './PeopleInfo';
import BandInfo from './BandInfo';

function MainScreen() {
  return <div className = 'main-div'>
      <PeopleInfo number={0}></PeopleInfo>
      <BandInfo></BandInfo>
  </div>
}

export default MainScreen;
