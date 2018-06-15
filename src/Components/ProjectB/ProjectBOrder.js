import React, { Component } from 'react';
import Coupon from "../PubComponents/Coupon"
import {connect} from 'react-redux';
import "./ProjectBOrderMoney.scss"
import {Link} from 'react-router'
import configureStore from "../../store"
import axios from 'axios'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import BottomTab from "../../PubComponents/BottomTab.js"
import TopBar from "../../PubComponents/TopBar.js"


class ProjectBOrderWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"抢购散标",
      value:"",
      tips:"",
      Html:'',
      MyCouponList:[],
      CouponMoneyUsed:0,
      useMsgs:[],
      couponId:""
    };
  }

  componentWillMount(){
    console.log(this.props)
  }

  componentDidMount(){

    let _this = this

    axios({
      method:"POST",
      url:"/Api/GetMyCoupon",
      data:{"pn":1},
      withCredentials:true      
    })
    .then(function (response) {
        _this.setState({
          MyCouponList:response.data.Data
        })
      })
    .then(()=>{
      let arr = []
      for(let j=0;j<this.state.MyCouponList.length;j++){
        arr.push("使用")
      }
      _this.setState({
        useMsgs:arr
      })
    })
      .catch(function (error) {
        console.log(error);
      });

  //   axios({
  //     method:"POST",
  //     url:"/ProjectBOrder",
  //     data:{"id":"d9ed4a8c-56a1-4b85-98d3-0dd632befe72"},
  //     withCredentials:true      
  //   })
  //   .then(function (response) {
  //       _this.setState({
  //         Html:response.data
  //       })
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  }


  changeValue(e){
    const NewUseMsgs = this.state.useMsgs

    for(let x=0;x<NewUseMsgs.length;x++){
      NewUseMsgs[x] = "使用"
    }
    if(e.target.value>this.props.location.state.CanUseMoney){
      this.setState({
        tips:"请先充值！"
      })
    }else if(e.target.value%100!=0){
      this.setState({
        tips:"输入100的整数倍"
      })
    }else{
      this.setState({
        value: e.target.value,
        useMsgs:NewUseMsgs
      });
    }

  }

  UseInvest(index,color){
    const NewUseMsgs = this.state.useMsgs

    for(let x=0;x<NewUseMsgs.length;x++){
      NewUseMsgs[x] = "使用"
    }

    NewUseMsgs[index] = "已使用"

    if(color === "orange"){
      var nodes = document.querySelectorAll('li.CouponNomal')
      for(let i=0;i<nodes.length;i++){
        nodes[i].style.cssText="width:94%;";
      }
      // let indexNumber = index-1>=0?index-1:0
      nodes[index].style.cssText="width:98%;";
      this.setState({
        CouponMoneyUsed:this.state.MyCouponList[index].Money,
        useMsgs:NewUseMsgs,
        couponId:this.state.MyCouponList[index].Id,
      })
    }
  }

  SendProjectBPayment(id){

    var Tze = this.state.value
    var couponId = this.state.couponId
    axios({
      method:"POST",
      url:"/ProjectBPayment",
      data:{
        "id":"5c451e11-eeee-4ad3-8378-d487adbe4cdf",
        "tze":Tze,
        "couponId":couponId
      },
      withCredentials:true      
    })
    .then(function (response) {
      alert(response.data.Msg)
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){

      const maxMoney = this.props.location.state.S_剩余投资额

      const CanUseMoney = this.props.location.state.CanUseMoney

      const coupons = this.state.MyCouponList.map((item,index)=>{

          let color = "gray",ClassCoupon = "CouponNomal";

          let orangeIndex;

          if(this.state.value>item.Limit){
            color = 'orange'
            orangeIndex = index
            // ClassCoupon = "CouponCanChoose"
          }

          return (
            <li className={ClassCoupon} key={index} onClick={this.UseInvest.bind(this,index,color)}> 
                <Coupon CouponMsgs={item} color={color} orangeIndex={orangeIndex} use={this.state.useMsgs[index]}/>
            </li>
          )
      })

      // const content = this.state.Html
      
      const Id = this.props.location.state.ProjectBId

      const BackToId = '/ProjectBDetail/' + Id

      return(
            /* <div className="ProjectBOrderTitle">
            <p>
                    <Link to={{
                        pathname:BackToId,
                        state:{
                            Id:Id
                        }
                    }}>
                    <i className="iconfont PushBack">&#xe645;</i>
                    </Link>
                    <span>抢购散标</span>
                </p>
            </div>
            <BottomTab/>
            <div dangerouslySetInnerHTML = {{ __html:content }}>
            </div> */
            <div className="ProjectBOrder">
              <TopBar title={this.state.title} BackTo={BackToId} Id={Id}/>
              <BottomTab/>
            <div className="ProjectBOrderMoney">
                <p>最大可投金额{maxMoney}元</p>
                <p>可用余额{CanUseMoney}元</p>
                <span className="MoneyMark">￥</span>
                <input className="investInput" type="text" onChange={this.changeValue.bind(this)}
                placeholder="100.00元起，投资额为100的整数倍"/>
                <p className="Tips">{this.state.tips}</p>
            </div>
            <ul className="Coupons">
                {coupons}
            </ul>
            <p className="CouponReduce">
              <span>优惠券</span>
              <span className='orangedMoney'>-￥{this.state.CouponMoneyUsed}</span>
            </p>
            <WingBlank>
            {CanUseMoney>0?
              <Button type='primary' onClick = {this.props.onClick.bind(this)}>确认</Button>
            :
              <Button type='primary' disabled>确认</Button>
            }
            </WingBlank>    
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (state, ownProps) => {

  const store = configureStore()

  const dispatch = store.dispatch

  return {
      onClick: () => {
          let value = document.querySelector(".investInput").value  
          dispatch({
              type: 'INVEST_SUCCESS',
              payload: value
          })
      }
  }
}

const ProjectBOrder = connect(mapStateToProps,mapDispatchToProps)(ProjectBOrderWrap)

export default ProjectBOrder