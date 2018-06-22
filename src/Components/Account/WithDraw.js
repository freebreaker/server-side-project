
import React from 'react';
import {Link} from "react-router";
import { Form , Input,} from 'antd';
import "./recharge.scss";
import { Checkbox,Button,Modal,WingBlank} from 'antd-mobile';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import FormProvider from '../../utils/Form';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
const AgreeItem = Checkbox.AgreeItem;
const FormItem = Form.Item;
const history = createMemoryHistory()


class WithDraw extends React.Component {
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

    SubmitBtn(){
        document.getElementById("SubmitBtn").click();
    }

    render() {

        return (
            <div>
                <TopBar title="提现" BackTo='/'/>
                <BottomTab/>
                <form className="RechargeForm" action="/WithdrawSubmit">
                        <div className="ProjectBOrderMoney">
                            <p>最大可取现金额1000元</p>
                            <span className="MoneyMark">￥</span>
                            <input className="investInput" type="text" onChange={this.changeValue.bind(this)}
                            placeholder="在此输入提现金额" name='Amount'/>
                            <div style={{textAlign:"left",margin:"40px 0"}}>
                                <p>1.请确保您输入的提现金额准确无误。</p>
                                <p>2.提现产生的手续费目前由平台垫付。</p>
                                <p>3.双休日和法定节假日期间，用户可以申请提现，我们会在下一个工作日进行处理。由此造成的不便，请多谅解！ </p>
                                <p>4.禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</p>
                                <p>5.提现过程如遇到问题，请联系客服，400-115-8001。</p>

                            </div>
                            <WingBlank>
                            {1>0?
                            <Button type="primary" onClick={this.SubmitBtn.bind(this)}>确认</Button>
                            :
                            <Button type='primary' disabled>确认</Button>
                            }
                            <input id='SubmitBtn' type='submit'/>
                            </WingBlank>   
                        </div>
                </form>

            </div>
        )
    }
}

export default WithDraw;