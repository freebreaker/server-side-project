import React from "react";
import {Link} from "react-router";
import { Form, Icon, Input, Checkbox} from 'antd';
import { Button, WhiteSpace, WingBlank,Modal} from 'antd-mobile';
import configureStore from "../../store"
import {connect} from 'react-redux';
import formProvider from "../../utils/Form";
import { loginTest,changeSelectedValue } from "../../actions/index";
import './signup.scss';
import BottomTab from '../../PubComponents/BottomTab'
import Register from "../../images/Register.png";
import axios from 'axios';
import { bindActionCreators } from "redux";

const FormItem = Form.Item;

class SignUpWrap extends React.Component{

    constructor(props){
        super(props)
        this.state={
            form:{},       //整个表单的valid
            YzmSrc:"/Yzm?tm="+Math.random(),
            phoneNo:"",
            Yzm:"",
            YzmText:"获取验证码",
            MsgCode:"",
            Password:""
        }
    }
    handleChange(){
        console.log('handlechange')
    }

    phoneChange(e){   //手机号离开事件
        this.setState({
            phoneNo:e.target.value
        })
    }
    textChange(e){   //短信验证码
        this.setState({
            MsgCode:e.target.value
        })
    }

    passwordChange(e){  //密码
        this.setState({
            Password:e.target.value
        })
    }

    confirmChange(e){  //确认密码
        this.setState({
            Confirm:e.target.value
        })
    }

    recommendChange(e){
        this.setState({
            Recommend:e.target.value
        })
    }

    imgYzmChange(e){
        this.setState({
            Yzm:e.target.value
        })
    }

    setYzmSrc(){
        this.setState({
            YzmSrc:"/Yzm?tm="+Math.random()
        })
    }

    postYzm(){
        this.setState({
            YzmText:"加载中"
        })
        axios({
            method:"POST",
            url:"ValidatePhone",
            data:{
                phoneNo:this.state.phoneNo,
                Yzm:this.state.Yzm
            },
            withCredentials:true
        }).then(function(res){
            if(res.data.Success){
                Modal.alert(
                    "发送成功！",
                    res.data.Msg,
                    [
                        { text: '确定', onPress: () => console.log('ok') }
                    ]
                );
            }else{
                Modal.alert(
                    "操作失败！",
                    res.data.Msg,
                    [
                        { text: '确定', onPress: () => console.log('ok') }
                    ]
                );
            }
        }).then((res)=>{
            this.setState({
                YzmText:"获取验证码"
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    LogIn(msgs,e){
        this.props.DoRegister({
            UserName:this.state.phoneNo,
            Password:this.state.Password
        },e)
        this.props.changeSelectedValue(2)
        window.location.href='/'
    }

    postRegister(e){
        let _this=this

        let _e = e

        axios({
            method:"POST",
            url:"DoRegister",
            data:{
                Confirm:this.state.Confirm,
                MsgCode:this.state.MsgCode,
                Password:this.state.Password,
                phoneNo:this.state.phoneNo,
                Recommend:this.state.Recommend
            },
            withCredentials:true
        }).then(function(res){
            if(res.data.Success){
                Modal.alert(
                    "注册成功！",
                    res.data.Msg,
                    [
                        { text: '确定', onPress: () => {
                            _this.LogIn({},_e)
                        } }
                    ]
                );
            }else{
                Modal.alert(
                    "操作失败！",
                    res.data.Msg,
                    [
                        { text: '确定', onPress: () => console.log('ok') }
                    ]
                );

            }
        }).catch((error)=>{
            console.log(error)
        })
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
                        <Input type="text"
                        // onBlur={onFormChange.bind(this,'tel')}
                        onChange={this.phoneChange.bind(this)}
                        placeholder="手机号将作为您的登录账号"/>
                        {tel.valid ?"":<p style={{marginBottom:-20}}>{tel.error}</p> }
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>图片验证码：</label>
                        <Input 
                        style={{
                            width:"35%"
                        }}
                        onChange={this.imgYzmChange.bind(this)}
                        type="text" placeholder="图片验证码"/>
                        <img 
                        style={{
                            maxWidth: "25%",
                            display: "inline-block",
                            verticalAlign: "middle"
                        }}
                        src={this.state.YzmSrc} alt="验证码" onClick={this.setYzmSrc.bind(this)}/>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>短信验证码：</label>
                        <Input 
                        style={{
                            width:"35%"
                        }}
                        onChange={this.textChange.bind(this)}
                        type="text" placeholder="手机验证码"/>
                        <span className="sendYzm" onClick={this.postYzm.bind(this)}>获取验证码</span>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>密   码：</label>
                        <Input type="text"
                        // onChange={onFormChange.bind(this,"password")}
                        onChange={this.passwordChange.bind(this)}
                        placeholder="登录密码至少6位"/>
                        <span>{password.valid ? "": password.error}</span>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>确   认：</label>
                        <Input type="text"
                        onChange={this.confirmChange.bind(this)}
                        placeholder="确认密码"/>
                        <span>{password.valid ? "": password.error}</span>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>推荐人（可选）：</label>
                        <Input type="text"
                        onChange={this.recommendChange.bind(this)}
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
                    onClick={(e)=>{this.postRegister(e)}}
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
    return {
        DoRegister:bindActionCreators(loginTest,dispatch),
        changeSelectedValue:bindActionCreators(changeSelectedValue,dispatch)
    }
  }


const SignUp = connect(mapStateToProps,mapDispatchToProps)(SignUpWrap)

export default SignUp; 

