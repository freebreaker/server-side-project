import React from "react";
import {Link} from "react-router";
import { Form, Icon, Input, Checkbox} from 'antd';
import { Button, WhiteSpace, WingBlank} from 'antd-mobile';
import configureStore from "../../store"
import {connect} from 'react-redux';
import formProvider from "../../utils/Form";
import { loginTest } from "../../actions/index";
import './signup.scss';
import BottomTab from '../../PubComponents/BottomTab'
import Register from "../../images/Register.png";

const FormItem = Form.Item;

class SignUpWrap extends React.Component{

    constructor(props){
        super(props)
        this.state={
            form:{}       //整个表单的valid
        }
    }
    handleChange(){
        console.log('handlechange')
    }
    componentWillMount(){
        console.log("signup")
    }

    render(){

        const {form:{tel,password},formValid,onFormChange} = this.props

        return (
            <div className='SignUp'>
                    <BottomTab/>
                    <p className='SignUpTitle'>注册</p>
                    <form className="signup-form">
                    <FormItem className="FormLabel">
                        <label>手机号：</label>
                        <Input type="text" value={tel.value} 
                        onChange={onFormChange.bind(this,"tel")}
                        placeholder="手机号将作为您的登录账号"/>
                        <span>{tel.valid ? "": tel.error}</span>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>图片验证码：</label>
                        <Input type="text" placeholder="图片验证码"/>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>短信验证码：</label>
                        <Input type="text" placeholder="手机验证码"/>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>密   码：</label>
                        <Input type="text" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="登录密码至少6位"/>
                        <span>{password.valid ? "": password.error}</span>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>确   认：</label>
                        <Input type="text" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="确认密码"/>
                        <span>{password.valid ? "": password.error}</span>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>推荐人（可选）：</label>
                        <Input type="text" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="可选填推荐人手机号"/>
                        <span>{password.valid ? "": password.error}</span>
                    <br/>
                    </FormItem>
                    <WingBlank>
                    <p className="Agree">
                        <Input type="checkbox" id="agreeCb" checked="checked" onChange={this.handleChange}/> 我已阅读并同意签署
                        <a href=''>《注册协议》</a>
                    </p>
                    <p className='Safe'>为保障账户资金安全，请使用真实身份注册</p>
                    <p style={{
                        textAlign:'center'
                    }}>
                    <Button type="primary" inline size="small" 
                    onClick={this.props.onClick.bind(this)}
                    className="login-form-button">下一步</Button>
                    </p>
                    <p style={{
                        textAlign:'center'
                    }}>
                        <Link to={{
                            pathname: `/`
                            }}>有账号，请登录
                        </Link>
                    </p>
                    </WingBlank>
                </form>
                <img
                // src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                src={Register}
                alt=""
                style={{ width: '90%', marginLeft:'5%',verticalAlign: 'top',paddingBottom:60 }}
              />
            </div>
        )
    }
}



SignUpWrap=formProvider({
    tel:{
        defaultValue:"",
        rules:[
            {
                pattern:(value)=>value.length>12,
                error:"手机号不满13位"
            }
            // {
            //     pattern: /^.{1,4}$/,
            //     error:"用户名最多四个字符"
            // }
        ]
    },
    password:{
        defaultValue:"",
        rules:[
            {
                pattern:(value)=>value.length>=6,
                error:"密码不得低于6位"
            }
        ]
    }
})(SignUpWrap)

const mapStateToProps = (state) => {
    return {
      data: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    // const store = configureStore()
    // const dispatch = store.dispatch

    // console.log(ownProps)
    return {
        onClick: () => {
            dispatch(loginTest("testmesgs"))
            
        }
    }
  }


const SignUp = connect(mapStateToProps,mapDispatchToProps)(SignUpWrap)

export default SignUp; 

