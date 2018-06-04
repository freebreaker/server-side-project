//Component1.jsx
import React from 'react';
import {connect} from 'react-redux';
import SignIn from "../SignIn/SignIn";
import configureStore from "../../store"
import AccountMsgs from './AccountMsgs';
import { loginTest, logOut, signIn} from "../../actions/index";
import { bindActionCreators } from 'redux';
import loginReducer from '../../reducers/login';

// import './app.scss'
class AccountWrap extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    componentWillMount(){
        console.log('willmount')
        console.log(this.props)
    }

    componentWillReceiveProps(){
        console.log("props changed")
        console.log(this.props)
    }
    componentWillUpdata(nextProps, nextState){
        console.log('update')
    }

    render() {
        const ifShow = this.props.data.IfLogIn.FetchSuccess
        const data = this.props.data.IfLogIn.Data
        return (
            ifShow?<AccountMsgs onSigned={this.props.Actions.signIn.bind(this)}
            onLogOut={this.props.Actions.logOut.bind(this)}
            ifSigned={this.props.data.IfLogIn.ifSigned}
            totalSalary={data.总资产}
            restMoney={data.可用余额}
            accumulatedIncome={data.累计收益}
            />:
            <SignIn onLogIn={(msgs,e) => {this.props.Actions.loginTest(msgs,e)}}
            isFetching={this.props.data.IfLogIn.isFetching}
            />
        )
    }
}

//导出组件
const mapStateToProps = (state) => {
    return {
      data: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let actions = {
        loginTest,
        signIn,
        logOut
    }
    return {
        Actions:bindActionCreators(actions,dispatch)
    }
  }


const Account = connect(mapStateToProps,mapDispatchToProps)(AccountWrap)

export default Account;
