import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import './lucky.scss'
// import {bindActionCreators} from 'redux'

class Lucky extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="Lucky" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title="抽奖说明" BackTo ="/MyGifts" Id={this.props.location.state.Id}/>
                <div className='LuckyP'>
                    <p>1、每天抽奖机会最多为3次；</p>
                    <p>2、每次抽奖将消耗60R币；</p>
                    <p>3、抽奖获得的奖品介绍：</p>
                    <p>投资券是润阳贷向客户提供的一种投资抵用券，持有投资券的会员可在润阳贷投资项目时，以1元投资券等值于1元人民币的价值抵用投资金额。</p>
                    <p>举例来说，会员准备投资人民币1000元的投资项目，如果会员使用了10元的投资券，则会员只需要投入人民币990元即可完成1000元的投资。</p>
                    <p>现金券是润阳贷平台向客户提供的一种等同于现金的使用券，可直接转入账户余额并提现。</p>
                    <p>使用条件及日期以发放的优惠券标注为准！</p>
                    <p>4、如有任何刷奖行为，一经查实，所得奖品将不予承诺。润阳贷并保留追究法律责任的权力。</p>
                    <p>5、此活动及相关奖品均与苹果公司无关。</p>
                </div>
                <BottomTab/>
            </div>
        );
    }
}

export default Lucky;