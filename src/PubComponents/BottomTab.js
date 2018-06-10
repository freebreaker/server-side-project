import React, { Component } from 'react';
import {Link} from "react-router";
import {changeSelectedValue} from "../actions/index"
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import './bottomTab.scss'

class BottomTabWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    returnToMainPage(value){
        this.props.changeSelectedValue(value)
    }

    render() {
        // const BgColor = this.props.BgColor

        const IconValue = this.props.selectedTab === 1 ?"&#xe601;":"&#xe63b;"

        return (
            <div className="BottomBar">
                <div className="BottomBarTab">
                    {this.props.selectedTab === 1 ?<Link className="BottomBarTabIcon"
                    to={{
                        pathname:"/"
                    }}
                    onClick={this.returnToMainPage.bind(this,1)}
                    >
                    <i className="iconfont" style={{
                        width: '22px',
                        height: '22px',
                        color:"rgb(51, 163, 244)"
                    }}>&#xe601;</i>
                    </Link>:
                    <Link className="BottomBarTabIcon"
                    to={{
                        pathname:"/"
                    }}
                    onClick={this.returnToMainPage.bind(this,1)}
                    >
                    <i className="iconfont" style={{
                        width: '22px',
                        height: '22px',
                        color:"rgb(148, 148, 148)"
                    }}>&#xe63b;</i>
                    </Link>
                }
                    <p>首页</p>
                </div>
                <div className="BottomBarTab">
                    <Link className="BottomBarTabIcon"
                    to={{
                        pathname:"/"
                    }}
                    onClick={this.returnToMainPage.bind(this,2)}
                    >
                    <i className="iconfont" style={{
                        width: '22px',
                        height: '22px',
                        color:this.props.selectedTab === 2 ?"rgb(51, 163, 244)":"rgb(148, 148, 148)"
                    }}>&#xe625;</i>
                    </Link>
                    <p>我的财富</p>
                </div>
                <div className="BottomBarTab">
                    <Link className="BottomBarTabIcon"
                    to={{
                        pathname:"/"
                    }}
                    onClick={this.returnToMainPage.bind(this,3)}
                    >
                    <i className="iconfont" style={{
                        width: '22px',
                        height: '22px',
                        color:this.props.selectedTab === 3 ?"rgb(51, 163, 244)":"rgb(148, 148, 148)"
                    }}>&#xe644;</i>
                    </Link>
                    <p>关于</p>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      selectedTab:state.selectedValue
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSelectedValue:bindActionCreators(changeSelectedValue,dispatch)
    }
}

const BottomTab = connect(mapStateToProps,mapDispatchToProps)(BottomTabWrap)

export default BottomTab;