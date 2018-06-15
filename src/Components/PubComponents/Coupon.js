import React, { Component } from 'react';
import './coupon.scss'
import {Link} from 'react-router'
class Coupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  // useCoupon(orangeIndex){
  //   if(document.querySelectorAll('div.stamp01').length>0 && orangeIndex !== undefined){
  //     var Nodes = document.querySelectorAll('div.stamp01')
  //     for(let i=0;i<Nodes.length;i++){
  //       Nodes[i].style.cssText="border:none";
  //     }
  //     Nodes[[orangeIndex-1]].style.cssText="border:2px dashed #2ba2ec";
  //   }
  // }

  render(){

    const {Money,CouponTypeTypeText,Limit,InvestmentPeriod,StartDate,EndDate} = this.props.CouponMsgs

    const color = this.props.color

    var orangeIndex = this.props.orangeIndex

    var CouponClass = "stamp stamp00"

    if(color === 'orange'){
      CouponClass = "stamp stamp01"
      
    }else if(color === 'gray'){
      CouponClass = "stamp stamp00"
    }

    return(
      <div className={CouponClass}>
          <div className="par">
          <p style={{fontSize:18,marginTop:10,marginBottom:10}}>{CouponTypeTypeText}</p>
          <sub className="sign">￥</sub><span>{Money}.00</span><sub>优惠券</sub>
          <p style={{marginBottom:5}}>单笔投资金额≥{Limit} 元</p>
          <p style={{marginTop:5}}>投资期限≥{InvestmentPeriod}个月</p>
          </div>
          <div className="copy">
          {this.props.useLink?<Link to={{
            pathname:this.props.useLink
          }} style={{position:'relative',zIndex:99,color:"white"}}>{this.props.use}</Link>
          :this.props.use}
          <p>{StartDate}<br/>{EndDate}</p></div>
          <i></i>
      </div>
    )
  }
}


export default Coupon