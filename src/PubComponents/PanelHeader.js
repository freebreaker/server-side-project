import React, { Component } from 'react';
import './panelHeader.scss'

class PanelHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const color = this.props.color
        return (
            <div className="PanelHeader">
              {/* <i className="iconfont LeftIcon" style={{
                width: '22px',
                height: '22px',
                color:color,
                background:'none',
                top:0
              }}>{this.props.icon}</i> */}
                <svg className="icon" aria-hidden="true" style={{
                    width: '22px',
                    height: '22px',
                }} >
                    <use xlinkHref={this.props.source}></use>
                </svg>
              <span>{this.props.text}</span>
            </div>
        );
    }
}

export default PanelHeader;
