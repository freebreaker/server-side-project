import React, { Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import "./topBar.scss";
import {Link} from 'react-router'

const history = createMemoryHistory();


class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const BgColor = this.props.BgColor

        const Url = this.props.BackTo

        const Id = this.props.Id?this.props.Id:null

        return (
            <div className="TopBar" style={{
                background:BgColor
            }}>
                <p>
                    <Link to={{
                        pathname:Url,
                        state:{
                            Id:Id
                        }
                    }}>
                    <i className="iconfont PushBack">&#xe645;</i>
                    </Link>
                    <span>{this.props.title}</span>
                </p>
            </div>
        );
    }
}

export default TopBar;