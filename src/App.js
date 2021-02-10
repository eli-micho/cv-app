import React, { Component } from 'react';
import './default.css';

//Components
import NameCard from './components/NameCard';
import ContactCard from './components/ContactCard';
import EducationCard from './components/EducationCard';
import WorkExpCard from './components/WorkExpCard';
import SkillsCard from './components/SkillsCard';


class App extends Component {
  render(){
    return(
      <div className="app">
        <NameCard />
        <ContactCard />
        <div className="break"></div>
        <EducationCard />
        <div className="break"></div>
        <WorkExpCard />
        <SkillsCard />
      </div>
    )
  }
};

export default App;
