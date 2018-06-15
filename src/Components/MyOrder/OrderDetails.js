import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import './orderDetails.scss'

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }


    render() {
        return (
            <div className="Order">
                <TopBar title='预约明细' BackTo="/MyOrder"/>
                <BottomTab/>
                <div className="OrderDetailsTable">
                    <div className='OrderDetailsItem'>
                        <p>预约冻结金额</p>
                        <p>10000.00</p>
                    </div>
                    <div className='OrderDetailsItem'>
                        <p>预约期限</p>
                        <p>6个月</p>
                    </div>
                    <div className='OrderDetailsItem'>
                        <p>预约年化利率</p>
                        <p>以平台实际匹配为准</p>
                    </div>
                    <div className='OrderDetailsItem'>
                        <p>日期</p>
                        <p>2018-04-30</p>
                        <p>19:40:44</p>
                    </div>
                    <div className='OrderDetailsItem'>
                        <p>已匹配</p>
                        <p>10000.00</p>
                    </div>
                    <div className='OrderDetailsItem'>
                        <p>预约冻结金额</p>
                        <p>10000.00</p>
                    </div>
                    <div className='CloseBtn'>
                        <button>关闭</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderDetails;