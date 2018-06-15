import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import Coupon from '../PubComponents/Coupon';
import axios from 'axios'

class MyCoupon extends Component {
    constructor(props) {
        super(props);
        this.state={
            MyCouponList:[]
        }
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
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const coupons = this.state.MyCouponList.map((item,index)=>{

            let color = "orange",ClassCoupon = "CouponNomal";

            return (
              <li className={ClassCoupon} key={index}> 
                  <Coupon CouponMsgs={item} color={color} use="使用" useLink="/ProjectBList"/>
              </li>
            )
        })
        return (
            <div className="RMoneyText" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title="使用优惠券" BackTo ="/MyGifts" Id={this.props.location.state.Id}/>
                <ul className="Coupons">
                    {coupons}
                </ul>
                <BottomTab/>
            </div>
        );
    }
}

export default MyCoupon;