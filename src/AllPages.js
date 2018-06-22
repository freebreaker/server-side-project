import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Home from "./Home";
import Account from "./Components/Account";
import About from "./Components/About";
import './Allpages.css'
import { changeSelectedValue } from './actions/index';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import $ from 'jquery';

class TabBottomWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:this.props.selectedTab,
      hidden: false,
      fullScreen: true,
    };
  }

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            icon={
              // <div style={{
              //   width: '22px',
              //   height: '22px',
              //   className=""
              //   // background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                
              // }}
              // />
              <i className="iconfont" style={{
                width: '22px',
                height: '22px'
              }}>&#xe63b;</i>
            }
            selectedIcon={
              // <div style={{
              //   width: '22px',
              //   height: '22px',
              //   background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              // />
              <i className="iconfont" style={{
                width: '22px',
                height: '22px'
              }}>&#xe601;</i>
            }
            title="首页"
            key="首页"
            // badge={'new'}
            selected={this.state.selectedTab === 1}
            onPress={() => {
              this.props.changeSelectedValue(1)
              this.setState({
                selectedTab:1
              })
            }}
            data-seed="logId1"
          >
             {<Home/>}
            {/* {this.renderContent('Koubei')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont" style={{
                width: '22px',
                height: '22px'
              }}>&#xe625;</i>
            }
            selectedIcon={
              <i className="iconfont" style={{
                width: '22px',
                height: '22px'
              }}>&#xe625;</i>
            }
            title="我的财富"
            key="我的财富"
            // dot
            selected={this.state.selectedTab === 2}
            onPress={() => {
              this.props.changeSelectedValue(2)
              this.setState({
                selectedTab:2
              })
            }}
          >
          {<Account/>}
            {/* {this.renderContent('Friend')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont" style={{
                width: '22px',
                height: '22px'
              }}>&#xe644;</i>
            }
            selectedIcon={
              <i className="iconfont" style={{
                width: '22px',
                height: '22px'
              }}>&#xe644;</i>
            }
            title="关于"
            key="关于"
            selected={this.state.selectedTab === 3}
            onPress={() => {
              this.props.changeSelectedValue(3)
              this.setState({
                selectedTab:3
              })
            }}
          >
          {<About/>}
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
        </TabBar>
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
  return {changeSelectedValue:bindActionCreators(changeSelectedValue,dispatch)}
}

const TabBottom = connect(mapStateToProps,mapDispatchToProps)(TabBottomWrap)

export default TabBottom