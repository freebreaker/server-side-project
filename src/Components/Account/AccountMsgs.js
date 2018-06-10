
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
                            <div className="HeadPhoto">
                                <svg className="icon" aria-hidden="true" style={{
                                    width: '50px',
                                    height: '40px'
                                }} >
                                    <use xlinkHref={this.props.ImgValue}></use>
                                </svg>
                            </div>
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
                                <div onClick={this.props.onSignIn.bind(this)}>
                                    {this.props.SignInMsgs.Success?"签到":"已签到"}
                                </div>
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
                            pathname:'MyAssets',
                            state:''
                        }}>
                    <svg className="icon" aria-hidden="true" style={{
                        width: '22px',
                        height: '22px',
                    }} >
                        <use xlinkHref="#icon-caifushuxing"></use>
                    </svg>
                    <span>我的资产</span>
                    <span className="RightSpan">></span>
                    </Link>
                    <Link to={{
                            pathname:'MyBorrows',
                            state:''
                        }}>
                    <svg className="icon" aria-hidden="true" style={{
                        width: '22px',
                        height: '22px',
                    }} >
                        <use xlinkHref="#icon-jiekuanshenqing"></use>
                    </svg>
                        <span>我的借款</span>
                        <span className="RightSpan">></span>
                    </Link> 
                    <Link to={{
                            pathname:'MyGifts',
                            state:''
                        }}>
                    <svg className="icon" aria-hidden="true" style={{
                        width: '22px',
                        height: '22px',
                        color:'rebeccapurple'
                    }} >
                        <use xlinkHref="#icon-libao"></use>
                    </svg>
                        <span>我的礼包</span>
                        <span className="RightSpan">></span>
                    </Link> 
                    <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                    <svg className="icon" aria-hidden="true" style={{
                        width: '22px',
                        height: '22px',
                    }} >
                        <use xlinkHref="#icon-fengxianchaxun"></use>
                    </svg>
                        <span>风险评估</span>
                        <span className="RightSpan">></span>
                    </Link> 
                    <Link to={{
                            pathname:'/Security',
                            state:''
                        }}>
                    <svg className="icon" aria-hidden="true" style={{
                        width: '22px',
                        height: '22px',
                    }} >
                        <use xlinkHref="#icon-anquanzhongxin"></use>
                    </svg>
                        <span>安全中心</span>
                        <span className="RightSpan">></span>
                    </Link> 
                    <Link to={{
                            pathname:'MyOrder',
                            state:''
                        }}>
                    <svg className="icon" aria-hidden="true" style={{
                        width: '22px',
                        height: '22px',
                        color:"red"
                    }} >
                        <use xlinkHref="#icon-yuyue"></use>
                    </svg>
                        <span>预约投标</span>
                        <span className="RightSpan">></span>
                    </Link> 
                    <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                    <svg className="icon" aria-hidden="true" style={{
                        width: '22px',
                        height: '22px',
                    }} >
                        <use xlinkHref="#icon-fangsuanpanguanlouyiwangzhanerjiguanyu"></use>
                    </svg>
                        <span>我的好友</span>
                        <span className="RightSpan">></span>
                    </Link> 
                    <Link to={{
                            pathname:'YourAdvice',
                            state:''
                        }}>
                    <svg className="icon" aria-hidden="true" style={{
                        width: '22px',
                        height: '22px',
                    }} >
                        <use xlinkHref="#icon-yijianfankui"></use>
                    </svg>
                        <span>意见反馈</span>
                        <span className="RightSpan">></span>
                    </Link> 
                    <Link onClick={this.props.onLogOut}>
                    <svg className="icon" aria-hidden="true" style={{
                        width: '22px',
                        height: '22px',
                    }} >
                        <use xlinkHref="#icon-tuichu2"></use>
                    </svg>
                        <span>安全退出</span>
                        <span className="RightSpan">></span>
                    </Link> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        UserMsgs:state.IfLogIn.Data,
        SignInMsgs:state.IfLogIn.ifSigned
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
