import React, { Component } from 'react';
import './LeftConversation.scss'

class LeftCoversation extends Component {

    render() {
        return (
            <div className="LeftConversation">
                    {/* <svg className="icon" aria-hidden="true" style={{
                        width: '32px',
                        height: '32px',
                    }} >
                        <use xlinkHref="#icon-fengxianchaxun"></use>
                    </svg> */}
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default LeftCoversation;