import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import './rMoneyText.scss'
// import {bindActionCreators} from 'redux'

class RMoneyUse extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="RMoneyText" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title="我的R币" BackTo ="/MyGifts" Id={this.props.location.state.Id}/>
                <div className='RMoneyTextP'>
                <div>
                    <h4>R币</h4>
                    <p>R币（仅限润阳贷使用），是润阳贷推出的一种虚拟激励性积分，用户完成R币相关任务后即可获得润阳贷赠送的R币，持有R币的用户可以在润阳贷平台兑换相应的礼券，亦可用来参与平台的各类活动。</p>
                </div>
                </div>
                <BottomTab/>
            </div>
        );
    }
}

export default RMoneyUse;