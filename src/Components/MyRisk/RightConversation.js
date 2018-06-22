import React, { Component } from 'react';
import './RightConversation.scss'
class RightConversation extends Component {

    render() {
        return (
            <div className="RightConversation">
                {this.props.title!==""?<span>{this.props.title}</span>:""}
            </div>
        );
    }
}

export default RightConversation;