import React, { Component } from 'react';
import './styles.css';

class SkillsCard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="skills-card">
                Skills
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                </ul>
            </div>
        )
    }
};

export default SkillsCard;
