import React from "react";
import {Link} from "react-router";
import { Form, Icon, Input, Checkbox} from 'antd';
import { Button, WhiteSpace, WingBlank} from 'antd-mobile';
import configureStore from "../../store"
import {connect} from 'react-redux';
import formProvider from "../../utils/Form";
import { loginTest } from "../../actions/index";

const FormItem = Form.Item;

class SignUpWrap extends React.Component{

    constructor(props){
        super(props)
        this.state={
            form:{}       //整个表单的valid
        }
    }

    componentWillMount(){
        console.log("signup")
    }

    render(){

        const {form:{tel,password},formValid,onFormChange} = this.props

        return (
            <div>
                <header>
                    <h1>注册</h1>
                </header>

                <main>
                    <form className="login-form">
                    <FormItem>
                    <label>手机号：</label>
                        <Input type="text" value={tel.value} 
                        onChange={onFormChange.bind(this,"tel")}
                        placeholder="不低于13位"/>
                        <span>{tel.valid ? "": tel.error}</span>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>图片验证码：</label>
                        <Input type="text"/>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>短信验证码：</label>
                        <Input type="text"/>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>密   码：</label>
                        <Input type="text" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="请输入密码"/>
                        <span>{password.valid ? "": password.error}</span>
                    <br/>
                    </FormItem>
                    <FormItem>
                    <label>确   认：</label>
                        <Input type="text" value={password.value}
                        onChange={onFormChange.bind(this,"password")}
                        placeholder="请输入密码"/>
                        <span>{password.valid ? "": password.error}</span>
                    <br/>
                    </FormItem>
                    <WingBlank>
                    <Button type="primary" inline size="small" 
                    onClick={this.props.onClick.bind(this)}
                    className="login-form-button">下一步</Button>
                    </WingBlank>
                    <Link to={{
                        pathname: `Register`
                        }}>有账号，请登录
                    </Link>
                </form>
                </main>
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

