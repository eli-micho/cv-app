import React, { Component } from 'react';
import './styles.css';

class ContactCard extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="contact-container">
                <ul id="contact-info-list">
                    <li>Email:</li>
                    <li>Phone Number:</li>
                    <li>LinkedIn:</li>
                </ul>
            </div>
        )
    }
}

export default ContactCard;
