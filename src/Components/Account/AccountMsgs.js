
import React from 'react';
import {Link} from "react-router";
import "./accountMsgs.scss";

class AccountMsgs extends React.Component {
    constructor(props){
        super(props)
        this.state={
            telephone:13160300173
        }
    }

    componentWillMount(){
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
                                <span>已认证</span>
                            </div>
                            <div className='SignIn'>
                                <p onClick={this.props.onSigned.bind(this)}>
                                {this.props.ifSigned?"已签到":"一键签到"}
                                </p>
                            </div>
                        </div>
                        <div className="InvestInfo">
                            <div className="InvestMoney">
                                <p>累计投资</p>
                                <p>{this.props.totalSalary}</p>
                            </div>
                            <div className="InvestMoney">
                                <p>可用余额</p>
                                <p>{this.props.restMoney}</p>
                            </div>
                            <div className="InvestMoney">
                                <p>已收利息</p>
                                <p>{this.props.accumulatedIncome}</p>
                            </div>
                            <div className="InvestMoney">
                                <p>待收利息</p>
                                <p>{this.state.telephone}</p>
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

export default AccountMsgs;
