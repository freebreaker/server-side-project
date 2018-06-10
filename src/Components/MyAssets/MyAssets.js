import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import './myAssets.scss'


class MyAssets extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="MyAssets">
                <TopBar title="我的资产"/>
                <div className="MyAssetsMsgs">
                    <div>
                        <div className="MyAssetsName">姓名</div>
                        <div className="MyAssetsName">R币 ></div>
                    </div>
                </div>
                <div className="MyAssetsRiskType">
                    <span>风险类型</span>
                    <span>稳健型 ></span>
                </div>
                <div className="MyAssetsAccount">
                    <div>
                        <div className="BGray">投资总额（元）</div>
                        <div className='BGBig'>100000.00</div>
                    </div>
                    <div>
                        <div className="BGray">昨日收益</div>
                        <div className='BGBig BGOrange'>+1.80</div>
                    </div>
                </div>
                <div className="MyAssetsOthers">
                    <div className="MyAssetsOptions">
                        <div className="MyAssetsOption">已收利息</div>
                        <div className="BGray">0.00</div>
                    </div>
                    <div className="MyAssetsOptions">
                        <div className='MyAssetsOption'>待收利息</div>
                        <div className="BGray">0.00</div>
                    </div>
                </div>
                <div className="MyAssetsOthers">
                    <div className="MyAssetsOptions">
                        <div className="MyAssetsOption">待收本金</div>
                        <div className="BGray">0.00</div>
                    </div>
                    <div className="MyAssetsOptions">
                        <div className='MyAssetsOption'>充值金额</div>
                        <div className="BGray">0.00</div>
                    </div>
                </div>
                <div className="MyAssetsOthers">
                    <div className="MyAssetsOptions">
                        <div className="MyAssetsOption">提现金额</div>
                        <div className="BGray">0.00</div>
                    </div>
                </div>
                <BottomTab/>
            </div>
        );
    }
}

export default MyAssets;