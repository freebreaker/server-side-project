import React from "react"
import {Link} from "react-router";
import { Form, Icon, Input, Checkbox} from 'antd';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import configureStore from "../../store"
import {connect} from 'react-redux';
import formProvider from "../../utils/Form";
import { loginTest } from "../../actions/index";
import 'font-awesome/css/font-awesome.min.css';
import './signin.scss';
import { debug } from "util";
import buttonGroup from "antd/lib/button/button-group";

const FormItem = Form.Item;

class SignInWrap extends React.Component{

    constructor(props){
        super(props)
        this.state={
            form:{}       //整个表单的valid
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

    componentWillMount(){
        console.log("signin")
    }   

    render(){

        const {form:{name,password},formValid,onFormChange} = this.props

        return (        
                <main>
                    <h1 className="SignInTitle">润阳贷</h1>
                    <form className="login-form" onSubmit={this.props.onLogIn.bind(this,{
                        UserName:name.value,
                        Password:password.value
                    })}>  
                    <FormItem>
                    <label><i className="fa fa-user" aria-hidden="true"></i></label>
                        <Input type="text" value={name.value} 
                        onChange={onFormChange.bind(this,"name")}
                        placeholder="请输入用户名" onFocus={this.onFocus} onBlur={this.onBlur}/>
                        <p>{name.valid ? "": name.error}</p>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label><i className="fa fa-unlock-alt" aria-hidden="true"></i></label>
                        <Input type="password" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="请输入密码" onFocus={this.onFocus} onBlur={this.onBlurPassword}/>
                        <p>{password.valid ? "": password.error}</p>
                    <br/>
                    </FormItem>
                    <div>
                    <button
                    type='submit'
                    className="form-button">{this.props.isFetching?'登 陆 中':'登 陆'}</button> 
                    </div>
                    <div className="form-register">
                    <Link to={{
                        pathname: `Register`
                        }}>忘记密码？
                    </Link>
                    <Link to={{
                        pathname: `Register`
                        }}>还未注册？
                    </Link>
                    </div>

                </form>
                </main>
        )
    }
}



const SignIn=formProvider({
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
})(SignInWrap)

export default SignIn;

