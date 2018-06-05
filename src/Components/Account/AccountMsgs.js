
import React from 'react';
import {Link} from "react-router";
import "./accountMsgs.scss";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {logOut,signIn} from "../../actions/index"
class AccountMsgsWrap extends React.Component {
    constructor(props){
        super(props)
        this.state={
            telephone:this.props.UserMsgs.PhoneNumber
        }
    }

    componentDidMount(){
        //获取store.getState()里的账号字段
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <div className = "AccountMsgsWrap">
                    <div className='MyAccount'>
                        <div className="MyAccountInfo">
                            <div className="HeadPhoto"></div>
                            <div className='Telephone'>
                                <div>
                                    <p>我的账户</p>
                                    <p>{this.state.telephone}</p>
                                </div>
                            </div>
                            <div className="Identify">
                                <span>|</span>
                                <span>{this.props.UserMsgs.IsP2PRegisteredText}</span>
                            </div>
                            <div className='SignIn'>
                                <p onClick={this.props.onSignIn.bind(this)}>
                                    已签到
                                </p>
                            </div>
                        </div>
                        <div className="InvestInfo">
                            <div className="InvestMoney">
                                <p>累计投资</p>
                                <p>{this.props.UserMsgs.L_累计投资}</p>
                            </div>
                            <div className="InvestMoney">
                                <p>可用余额</p>
                                <p></p>
                            </div>
                            <div className="InvestMoney">
                                <p>已收利息</p>
                                <p>{this.props.UserMsgs.Z_总收益}</p>
                            </div>
                            <div className="InvestMoney">
                                <p>待收利息</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="RechargeAndDraw">
                    <Link to={{
                        pathname:'Recharge',
                        state:''
                    }}>
                        充值
                    </Link>
                    <Link to={{
                        pathname:'Recharge',
                        state:''
                    }}>
                        提现
                    </Link>
                </div>
                <div className="AccountTableWrap">
                    <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                        我的资产<span>></span>
                    </Link>
                    <Link to={{
                            pathname:'MyBorrows',
                            state:''
                        }}>
                        我的借款<span>></span>
                    </Link> 
                    <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                        我的借款<span>></span>
                    </Link> 
                    <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                        我的借款<span>></span>
                    </Link> 
                    <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                        我的借款<span>></span>
                    </Link> 
                    <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                        我的借款<span>></span>
                    </Link> 
                    <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                        我的借款<span>></span>
                    </Link> 
                    <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                        我的借款<span>></span>
                    </Link> 
                    <Link onClick={this.props.onLogOut}>
                        安全退出<span>></span>
                    </Link> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        UserMsgs:state.IfLogIn.Data
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogOut:bindActionCreators(logOut,dispatch),
        onSignIn:bindActionCreators(signIn,dispatch)
    }
}

const AccountMsgs = connect(mapStateToProps,mapDispatchToProps)(AccountMsgsWrap)

export default AccountMsgs;
