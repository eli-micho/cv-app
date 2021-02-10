import React, { Component } from 'react';
import './styles.css';

class WorkExpCard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="workexp-container">
                Work Experience
                <ul>
                    <li>Position 1</li>
                    <li>Position 2</li>
                </ul>
            </div>
        )
    }
};

export default WorkExpCard;
