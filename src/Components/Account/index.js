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
    }
    render() {
        const ifShow = this.props.data.IfLogIn.FetchSuccess
        const data = this.props.data.IfLogIn.Data
        return (
            ifShow?<AccountMsgs
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
        logOut,
        loginTest
    }
    return {
        Actions:bindActionCreators(actions,dispatch)
    }
  }


const Account = connect(mapStateToProps,mapDispatchToProps)(AccountWrap)

export default Account;
