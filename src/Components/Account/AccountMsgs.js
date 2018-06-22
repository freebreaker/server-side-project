
import React from 'react';
import {Link} from "react-router";
import "./accountMsgs.scss";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {logOut,signIn,getMyAssetList,getCanUseMoney} from "../../actions/index"
class AccountMsgsWrap extends React.Component {
    constructor(props){
        super(props)
        this.state={
            telephone:this.props.UserMsgs.PhoneNumber
        }
    }

    componentDidMount(){
        //获取store.getState()里的账号字段
        this.props.GetMyAssetList()
        this.props.GetCanUseMoney()
    }

    
    render() {

        const AssestList = this.props.AssestList

        // const CanUseMoney = this.props.CanUseMoney

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
                                    <use xlinkHref='#icon-xiangmu'></use>
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
                                <p>待收本金</p>
                                <p>{AssestList[3]}</p>
                            </div>
                            <div className="InvestMoney">
                                <p>可用余额</p>
                                <p>{this.props.UserMsgs.Money}</p>
                            </div>
                            <div className="InvestMoney">
                                <p>已收利息</p>
                                <p>{AssestList[1]}</p>
                            </div>
                            <div className="InvestMoney">
                                <p>待收利息</p>
                                <p>{AssestList[2]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AccountTableWrap">
                    <Link to={{
                                pathname:'WithRecharge',
                                state:{
                                    Name:this.props.UserMsgs.FullName,
                                    InvestMoney:AssestList[0],
                                    InterestReceived:AssestList[1],
                                    InterestNotReceived:AssestList[2],
                                    MoneyNotReceived:AssestList[3],
                                    RechargeMoney:AssestList[4],
                                    WithDrawMoney:AssestList[5],
                                }
                            }}>
                        <svg className="icon" aria-hidden="true" style={{
                            width: '22px',
                            height: '22px',
                        }} >
                            <use xlinkHref="#icon-jinbi1"></use>
                        </svg>
                        <span>充值</span>
                        <span className="RightSpan">></span>
                    </Link>
                    <Link 
                        style={{marginBottom:10}}
                        to={{
                            pathname:'WithDraw',
                            state:{
                                Name:this.props.UserMsgs.FullName,
                                InvestMoney:AssestList[0],
                                InterestReceived:AssestList[1],
                                InterestNotReceived:AssestList[2],
                                MoneyNotReceived:AssestList[3],
                                RechargeMoney:AssestList[4],
                                WithDrawMoney:AssestList[5],
                            }
                        }}>
                        <svg className="icon" aria-hidden="true" style={{
                            width: '22px',
                            height: '22px',
                        }} >
                            <use xlinkHref="#icon-jinrongxianxingge-"></use>
                        </svg>
                        <span>提现</span>
                        <span className="RightSpan">></span>
                    </Link>
                    <Link to={{
                            pathname:'MyAssets',
                            state:{
                                Name:this.props.UserMsgs.FullName,
                                InvestMoney:AssestList[0],
                                InterestReceived:AssestList[1],
                                InterestNotReceived:AssestList[2],
                                MoneyNotReceived:AssestList[3],
                                RechargeMoney:AssestList[4],
                                WithDrawMoney:AssestList[5],
                            }
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
                            state:{
                                Id:this.props.UserMsgs.Id
                            }
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
                            state:{Id:this.props.UserMsgs.Id}
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
                            pathname:'MyRisk',
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
                            pathname:'MyFriends',
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
        SignInMsgs:state.IfLogIn.ifSigned,
        AssestList:state.IfLogIn.AssestList,
        CanUseMoney:state.IfLogIn.CanUseMoney
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogOut:bindActionCreators(logOut,dispatch),
        onSignIn:bindActionCreators(signIn,dispatch),
        GetMyAssetList:bindActionCreators(getMyAssetList,dispatch),
        GetCanUseMoney:bindActionCreators(getCanUseMoney,dispatch),
    }
}

const AccountMsgs = connect(mapStateToProps,mapDispatchToProps)(AccountMsgsWrap)

export default AccountMsgs;
