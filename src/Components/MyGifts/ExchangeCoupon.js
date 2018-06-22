import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import Coupon from '../PubComponents/Coupon';
import axios from 'axios';

class ExchangeCoupon extends Component {
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
          url:"/Api/GetExchangeCouponType",
          withCredentials:true      
        })
        .then(function (response) {
            _this.setState({
              MyCouponList:response.data
            })
          })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const coupons = this.state.MyCouponList.map((item,index)=>{

            let color = "orange",ClassCoupon = "CouponNomal";

            let postId = "/Api/ExchangeCoupon/"+ item.Id

            return (
              <li className={ClassCoupon} key={index}> 
                  <Coupon CouponMsgs={item} color={color} use="" useLink="" postUrl={postId}/>
              </li>
            )
        })

        return (
            <div className="ExchangeCoupon" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title="投资券兑换" BackTo ="/MyGifts"/>
                <ul className="Coupons">
                    {coupons}
                </ul>
                <BottomTab/>
            </div>
        );
    }
}

export default ExchangeCoupon;