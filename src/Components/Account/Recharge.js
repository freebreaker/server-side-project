
import React from 'react';
import {Link} from "react-router";
import { Form , Input,} from 'antd';
import "./recharge.scss";
import FormProvider from '../../utils/Form';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';

const FormItem = Form.Item;
const history = createMemoryHistory()


class Recharge extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    componentWillMount(){
        //获取store.getState()里的账号字段
        console.log(this.props)
    }

    goBack(){
        history.goBack()
    }

    render() {

        return (
            <div>
                <button onClick={this.goBack.bind(this)}>返 回</button>
                <form className="RechargeForm" action="/Mobile/RechargeSubmit">
                        <FormItem className='RechargeFormItem'>
                        <label>账户余额：</label>
                            <Input type="text" defaultValue ="name .value"/>
                        <br/>
                        </FormItem>
                        <FormItem className='RechargeFormItem'>
                        <label>充值金额：</label>
                            <Input type="text"
                            placeholder="请输入整数" name="Amount"/>
                        <br/>
                        </FormItem>
                        <FormItem className='RechargeFormItem'>
                        <label>充值方式：</label>
                            <Input type="radio" name="IsWy" value="true" checked="checked"/>
                        </FormItem>
                        <div>
                        <button
                        type='submit'
                        className="form-button">提 交</button> 
                        </div>
                        {/* <a href="https://jzh-test.fuiou.com/jzh/app/app500002_req_reto.action">提交11111111</a> */}                
                </form>

            </div>
        )
    }
}

export default Recharge;
