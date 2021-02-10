import './styles.css';
import React, { Component } from 'react';

class NameCard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="name-container">
                <span>First</span>
                <span>Last</span>
                <span className="edit-btn">
                    <i className="fa fa-edit "></i>
                </span>
            </div>
        )
    }
};

export default NameCard;
