import React from "react"
import {Link} from "react-router";
import { Form, Icon, Input, Checkbox} from 'antd';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import configureStore from "../../store"
import {connect} from 'react-redux';
import formProvider from "../../utils/Form";
import { loginTest } from "../../actions/index";
import './register.scss';
import buttonGroup from "antd/lib/button/button-group";

const FormItem = Form.Item;

class RegisterWrap extends React.Component{

    constructor(props){
        super(props)
        this.state={
            form:{},       //整个表单的valid
            YzmSrc:"/Yzm?tm="+Math.random(0,100000)
        }
    }

    onFocus(event){
        event.target.placeholder=""
    }

    onBlur(event){
        event.target.placeholder = "请输入用户名"
    }

    onBlurPassword(event){
        event.target.placeholder = "请输入密码"
    }

    setYzmSrc(){
        debugger
        this.setState({
            YzmSrc:"/Yzm?tm="+Math.random(0,100000)
        })
    }

    componentWillMount(){
        console.log("signin")
    }   

    render(){

        const {form:{name,password},formValid,onFormChange} = this.props

        return (        
                <main>
                    <h1 className="SignInTitle">润阳贷</h1>
                    <form className="register-form" onSubmit={this.props.onLogIn.bind(this,{
                        UserName:name.value,
                        Password:password.value
                    })}>  
                    <FormItem>
                    <label>手机号</label>
                        <Input type="text" value={name.value} 
                        onChange={onFormChange.bind(this,"name")}
                        placeholder="请输入用户名" onFocus={this.onFocus} onBlur={this.onBlur}/>
                        <p>{name.valid ? "": name.error}</p>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>图片验证码</label>
                        <Input type="password" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="请输入密码" onFocus={this.onFocus} onBlur={this.onBlurPassword}/>
                        <p>{password.valid ? "": password.error}</p>
                        <img src={this.state.YzmSrc} alt="验证码" onClick={this.setYzmSrc}/>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>短信验证码</label>
                        <Input type="password" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="请输入密码" onFocus={this.onFocus} onBlur={this.onBlurPassword}/>
                        <p>{password.valid ? "": password.error}</p>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>密码</label>
                        <Input type="password" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="请输入密码" onFocus={this.onFocus} onBlur={this.onBlurPassword}/>
                        <p>{password.valid ? "": password.error}</p>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>确认</label>
                        <Input type="password" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="请输入密码" onFocus={this.onFocus} onBlur={this.onBlurPassword}/>
                        <p>{password.valid ? "": password.error}</p>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>推荐人（可选）</label>
                        <Input type="password" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="请输入密码" onFocus={this.onFocus} onBlur={this.onBlurPassword}/>
                        <p>{password.valid ? "": password.error}</p>
                    <br/>
                    </FormItem>
                </form>
                </main>
        )
    }
}



const Register=formProvider({
    name:{
        defaultValue:"",
        rules:[
            {
                pattern:(value)=>value.length>0,
                error:"请输入用户名"
            },
            {
                pattern: /^.{1,11}$/,
                error:"用户名最多11个字符"
            }
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
})(RegisterWrap)

export default Register;

