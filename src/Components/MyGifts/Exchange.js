import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import './Exchange.scss'
// import {bindActionCreators} from 'redux'

class Exchange extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const Id = this.props.location.state.Id
    }

    render() {
        return (
            <div className="Exchange" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title="优惠券兑换" BackTo ="/MyGifts" Id={this.props.location.state.Id}/>
                <div className='ExchangeP'>
                R币（仅限润阳贷使用），是润阳贷推出的一种虚拟激励性积分，用户完成R币相关任务后即可获得润阳贷赠送的R币，持有R币的用户可以在润阳贷平台兑换相应的礼券，亦可用来参与平台的各类活动。
                </div>
                <BottomTab/>
            </div>
        );
    }
}

export default Exchange;