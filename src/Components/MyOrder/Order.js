import React, { Component } from 'react';
import axios from 'axios'
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import { Checkbox,Button} from 'antd-mobile';
import './order.scss';
import {Link} from 'react-router'

const AgreeItem = Checkbox.AgreeItem;

class Order extends Component {
    constructor(props) {
        super(props);
        this.state={
            checked: true,
            EqualChecked:false,
            DateChecked:false,
            disabled: false,
            MonthArr:['Selected','NotSelected','NotSelected','NotSelected','NotSelected','NotSelected'],
            InvestMoney:100,
            month3:true,
            month6:false
        }
    }

    getMonth(value){
        const newArr = this.state.MonthArr
        for(let i=0;i<newArr.length;i++){
            newArr[i] = 'NotSelected'
        }
        newArr[value] = 'Selected'

        if(value===0){
            this.setState({
                MonthArr:newArr,
                month3:true,
                month6:false
            })
        }else if(value ===1){
            this.setState({
                MonthArr:newArr,
                month3:false,
                month6:true
            })
        }

    }

    onChangeEqual =(e) =>{
        this.setState({
            EqualChecked: e.target.checked,
            DateChecked:false
        });
    }

    onChangeDate =(e) =>{
        this.setState({
            EqualChecked:false,
            DateChecked: e.target.checked,
        });
    }


    handleChange(e){
        this.setState({
            InvestMoney:e.target.value
        })
    }

    reduceMoney(value){
        const money = this.state.InvestMoney
        if(money>0){
            this.setState({
                InvestMoney:money-100
            })
        }
    }

    addMoney(value){
        const money = this.state.InvestMoney
        if(money<10000){
            this.setState({
                InvestMoney:money+100
            })
        }
    }

    addBespeak(){
        const _this = this
        axios({
            method:"POST",
            url:"Api/AddBespeak",
            data:{
                money:this.state.InvestMoney,
                month3:this.state.month3,
                month6:this.state.month6,
                payType1:this.state.EqualChecked,
                payType2:true,
                payType3:this.state.DateChecked
            },
            withCredentials:true 
        }).then(function(response){

        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="Order">
                <TopBar title='预约投标' BackTo='/'/>
                <BottomTab/>
                <p className='OrderTitle'>目前仅支持3个月和6个月</p>
                <div className='OrderTime'>
                    <div className={this.state.MonthArr[0]}
                        onClick={this.getMonth.bind(this,0)}
                    >3个月</div>
                    <div className={this.state.MonthArr[1]}
                        onClick={this.getMonth.bind(this,1)}
                    >6个月</div>
                    <div 
                        className='NotSupported'
                    // className={this.state.MonthArr[2]}
                    //     onClick={this.getMonth.bind(this,2)}
                    >9个月</div>
                    <div 
                    className='NotSupported'
                    // className={this.state.MonthArr[3]}
                    //     onClick={this.getMonth.bind(this,3)}
                    >12个月</div>
                    <div 
                    className='NotSupported'
                        // className={this.state.MonthArr[4]}
                        // onClick={this.getMonth.bind(this,4)}
                    >15个月</div>
                    <div 
                    className='NotSupported'
                        // className={this.state.MonthArr[5]}
                        // onClick={this.getMonth.bind(this,5)}
                    >18个月</div>
                </div>
                <div className='OrderMsgs'>
                    <div>投资金额(元)</div>
                    <div className='OrderMsgsDetail'>100起投，按100的倍数递增</div>
                    <div className='OrderMsgsDetail'>预约年化利率范围：以平台实际匹配为准</div>
                    <div className="OrderMoney">
                        <span onClick={this.reduceMoney.bind(this,100)}>-</span>
                        <input value={this.state.InvestMoney}
                                onChange={(e)=>this.handleChange(e)}
                        ></input>
                        <span onClick={this.addMoney.bind(this,100)}>+</span>
                    </div>
                    <div className="OrderCheck">
                        <div>预约还款方式：</div>
                        <div>
                        <AgreeItem 
                            checked={this.state.EqualChecked}
                            disabled={this.state.disabled} 
                            onChange={this.onChangeEqual}>
                            等额本息
                        </AgreeItem>
                        <AgreeItem 
                            checked={this.state.DateChecked}
                            disabled={this.state.disabled} 
                            onChange={this.onChangeDate}>
                            到期付本付息
                        </AgreeItem>
                        <AgreeItem 
                            checked={this.state.checked}
                            disabled={this.state.disabled}>
                            按月付息，到期付本
                        </AgreeItem>
                        </div>
                    </div>
                    <div className="OrderFile">
                        <AgreeItem 
                            checked={this.state.checked}
                            disabled={this.state.disabled}>
                                <span>我已阅读并同意签署
                                    <a>《预约投标协议》</a>
                                    和
                                    <a>《预约投标规则》</a>
                                </span>
                        </AgreeItem>
                    </div>
                    <Button className="SubmitBtn" type='primary' onClick={this.addBespeak.bind(this)}>保存并开启预约</Button>
                    <Link className='OrderDetails' to={{
                        pathname:"MyOrder/Details",
                        state:''
                        }}> 
                        点击查看预约明细 >>
                    </Link>
                </div>

            </div>
        );
    }
}

export default Order;