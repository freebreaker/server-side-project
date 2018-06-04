import React, { Component } from 'react';
import Coupon from "../PubComponents/Coupon"
import {connect} from 'react-redux';
import TopBar from "../../PubComponents/TopBar"
import "./ProjectBOrderMoney.scss"
import configureStore from "../../store"

class ProjectBOrderWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"抢购散标",
      value:"",
      tips:""
    };
  }

  componentWillMount(){
    console.log(this.props)
  }


  changeValue(e){
    this.setState({value: e.target.value});
    if(e.target.value%100!=0){
      this.setState({
        tips:"输入100的整数倍"
      })
    }else{
      this.setState({
        tips:""
      })
    }
  }


  render(){
    
      const maxMoney = this.props.location.state.S_剩余投资额

      const coupons = [1,2,3].map((item,index)=>{
          return (
            <li key={index}> 
                <Coupon/>
            </li>
          )
      })

      return(
        <div className="ProjectBOrder">
            <TopBar title={this.state.title}/>

            <div className="ProjectBOrderMoney">
              <p>最大可投金额1000元</p>
              <p>可用余额1000元</p>
              <span className="MoneyMark">￥</span>
              <input className="investInput" type="text" onChange={this.changeValue.bind(this)}
              placeholder="100.00元起，投资额为100的整数倍"/>
              <p className="Tips">{this.state.tips}</p>
              </div>
            <ul>
                {coupons}
              </ul>
            <button onClick = {this.props.onClick.bind(this)}>立即投资</button>       
        </div>
      )
  }
}

const mapStateToProps = (state) => {

  console.log(state)

  return {
    data: state
  }
}

const mapDispatchToProps = (state, ownProps) => {

  const store = configureStore()

  const dispatch = store.dispatch

  console.log(ownProps)

  return {
      onClick: () => {
          let value = document.querySelector(".investInput").value  
          dispatch({
              type: 'INVEST_SUCCESS',
              payload: value
          })
          console.log(store.getState())
      }
  }
}

const ProjectBOrder = connect(mapStateToProps,mapDispatchToProps)(ProjectBOrderWrap)

export default ProjectBOrder