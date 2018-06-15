import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import './rMoneyText.scss'
// import {bindActionCreators} from 'redux'

class RMoneyText extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="RMoneyText" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title="我的优惠券" BackTo ="/MyGifts" Id={this.props.location.state.Id}/>
                <div className='RMoneyTextP'>
                <div>
                    <h4>现金券</h4>
                    <p>现金券是润阳贷平台为平台用户提供的一种等同于现金的使用券，用户可以直接转入平台个人账户并可提现。</p>
                    <h4>投资券</h4>
                    <p>投资券是润阳贷平台为投资用户提供的一种投资抵用券，持有投资券的用户可在投资时自主选用满足条件的投资券进行投资，系统将自动抵用其所对应面值。</p>
                    <p>注：券到期7天后会自动清除。</p>
                </div>
                </div>
                <BottomTab/>
            </div>
        );
    }
}

export default RMoneyText;