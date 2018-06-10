import React, { Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import "./topBar.scss";
const history = createMemoryHistory();


class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const BgColor = this.props.BgColor

        return (
            <div className="TopBar" style={{
                background:BgColor
            }}>
                <p>
                    <i className="iconfont PushBack" onClick={()=>history.goBack()}>&#xe645;</i>
                    <span>{this.props.title}</span>
                </p>
            </div>
        );
    }
}

export default TopBar;