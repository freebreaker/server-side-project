import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import axios from 'axios';
import './myAssets.scss'


class MyAssets extends Component {
    constructor(props) {
        super(props);
        this.state={
            MyAssets:[]
        }
    }

    componentWillMount(){
        const _this = this
        axios({
            method:"POST",
            url:"GetMyAssetList",
            withCredentials:true 
        }).then(function(response){
            _this.setState({
                MyAssets:response.data
            })
        })
    }

    render() {

        // const {name,InvestMoney,InterestReceived,InterestNotReceived,MoneyNotReceived,RechargeMoney,WithDrawMoney} = this.state.MyAssets

        return (
            <div className="MyAssets">
                <TopBar title="我的资产" BackTo='/'/>
                {/* <div className="MyAssetsMsgs">
                    <div>
                        <div className="MyAssetsName">姓名:{name}</div>
                        <div className="MyAssetsName">R币 ></div>
                    </div>
                </div>
                <div className="MyAssetsRiskType">
                    <span>风险类型</span>
                    <span>稳健型 ></span>
                </div> */}
                <div className="MyAssetsAccount">
                    <div>
                        <div className="BGray">投资总额（元）</div>
                        <div className='BGBig'>{this.state.MyAssets.length>0?this.state.MyAssets[0]:"0.00"}</div>
                    </div>
                    <div>
                        <div className="BGray">昨日收益</div>
                        <div className='BGBig BGOrange'>+1.80</div>
                    </div>
                </div>
                <div className="MyAssetsOthers">
                    <div className="MyAssetsOptions">
                        <div className="MyAssetsOption">已收利息</div>
                        <div className='BGBig'>{this.state.MyAssets.length>0?this.state.MyAssets[1]:"0.00"}</div>
                    </div>
                    <div className="MyAssetsOptions">
                        <div className='MyAssetsOption'>待收利息</div>
                        <div className='BGBig'>{this.state.MyAssets.length>0?this.state.MyAssets[2]:"0.00"}</div>
                    </div>
                </div>
                <div className="MyAssetsOthers">
                    <div className="MyAssetsOptions">
                        <div className="MyAssetsOption">待收本金</div>
                        <div className='BGBig'>{this.state.MyAssets.length>0?this.state.MyAssets[3]:"0.00"}</div>
                    </div>
                    <div className="MyAssetsOptions">
                        <div className='MyAssetsOption'>充值金额</div>
                        <div className='BGBig'>{this.state.MyAssets.length>0?this.state.MyAssets[4]:"0.00"}</div>
                    </div>
                </div>
                <div className="MyAssetsOthers">
                    <div className="MyAssetsOptions">
                        <div className="MyAssetsOption">提现金额</div>
                        <div className='BGBig'>{this.state.MyAssets.length>0?this.state.MyAssets[5]:"0.00"}</div>
                    </div>
                </div>
                <BottomTab/>
            </div>
        );
    }
}

export default MyAssets;