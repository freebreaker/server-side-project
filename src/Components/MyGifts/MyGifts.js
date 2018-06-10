import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import MyGiftItem from "./MyGiftItem.js"
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

class MyGiftsWrap extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="MyGifts" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title="我的礼包"/>
                        <MyGiftItem title='我的R币' RMoney={this.props.RMoney}
                        ImgValue2="#icon-jinbi"
                        LeftMsgs="签到得R币"
                        RightMsgs="邀请好友得R币"
                        ShouldImg="1"
                        intruduction="查看R币使用说明"
                        LeftFontColor =""
                        />
                        <MyGiftItem title='去抽奖'
                        ImgValue="#icon-choujiang"
                        ImgValue2='#icon-choujiangicon'
                        LeftMsgs="每次最多抽3次"
                        LeftMsgs2="每次抽奖耗费60R币"
                        RightMsgs="进入抽奖"
                        ShouldImg="2"
                        intruduction="查看抽奖规则"
                        LeftFontColor ="icon orange"
                        RightFontColor ="icon oranged"
                        />
                        <MyGiftItem title='去兑换'
                        ImgValue="#icon-duihuan"
                        ImgValue2="#icon-jilu"
                        LeftMsgs="兑换"
                        RightMsgs="兑换须知"
                        intruduction="兑换优惠券"
                        LeftFontColor ="icon blue"
                        RightFontColor ="icon"
                        />
                        <MyGiftItem title='我的优惠券'
                        ImgValue="#icon-youhuiquan"
                        ImgValue2 ="#icon-techreport-"
                        LeftMsgs="5张"
                        RightMsgs="优惠券须知"
                        intruduction="去使用优惠券"
                        />
                <BottomTab/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        RMoney:state.IfLogIn.Data.RMoney
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const MyGifts = connect(mapStateToProps,mapDispatchToProps)(MyGiftsWrap)

export default MyGifts;