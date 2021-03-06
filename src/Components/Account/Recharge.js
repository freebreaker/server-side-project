
import React from 'react';
import {Link} from "react-router";
import "./recharge.scss";
import { Checkbox,Modal,WingBlank,Button} from 'antd-mobile';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import FormProvider from '../../utils/Form';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
const AgreeItem = Checkbox.AgreeItem;
const history = createMemoryHistory()


class Recharge extends React.Component {
    constructor(props){
        super(props)
        this.state={
            checked: true,
            disabled: false
        }
    }

    componentWillMount(){
        //获取store.getState()里的账号字段
        console.log(this.props)
    }

    goBack(){
        history.goBack()
    }

    changeValue(){
        console.log('changevalue')
    }

    postRecharge(){
        
    }

    SubmitBtn(){
        document.getElementById("SubmitBtn").click();
    }

    render() {

        return (
            <div>
                <TopBar title="充值" BackTo='/'/>
                <BottomTab/>
                 <form className="RechargeForm" action="/RechargeSubmit">
                        <div className="ProjectBOrderMoney">
                            <p>最大可充值金额1000元</p>
                            <p>可用余额1000元</p>
                            <span className="MoneyMark">￥</span>
                            <input className="investInput" type="text" 
                            name="Amount"
                            onChange={this.changeValue.bind(this)}
                            placeholder="在此输入充值金额"/>
                            <AgreeItem 
                            style={{marginTop:"1rem",marginBottom:"1rem"}}
                            checked={this.state.checked}
                            disabled={this.state.disabled}
                            >
                            快捷充值
                            </AgreeItem>
                            <input style={{display:'none'}} type="radio" name="IsWy" value="true" defaultChecked="checked"/>
                            <WingBlank>
                            {1>0?
                            <Button type="primary" onClick={this.SubmitBtn.bind(this)}>确认</Button>
                            :
                            <Button type="primary" disabled>确认</Button>
                            }
                            <input id='SubmitBtn' type='submit'/>
                            </WingBlank>   
                        </div>
                    </form> 

            </div>
        )
    }
}

export default Recharge;
