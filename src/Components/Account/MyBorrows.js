
import React from 'react';
import {Link} from "react-router";
import { Form , Input,} from 'antd';
import "./myBorrows.scss";
import MyBorrowsItem from "./MyBorrowsItem"
import axios from "axios"
import { getBorrowList } from '../../actions/index';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// @connect(
//     state=>state.MyBorrowList,
//     dispatch=>bindActionCreators(getBorrowList,dispatch)
//    )
class MyBorrowsWrap extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentDidMount(){
        this.props.getBorrowList()
    }
    
    render() {
        const projectList = this.props.state.MyBorrowList
        let MyBorrowsItems = projectList.map((item,index) => {
            return (
                <li key={index}>
                    <MyBorrowsItem infos={item}/>
                </li>
            )
        })
        return (
            <div className='MyBorrows'>
                <p>我的借款</p>
                <ul>
                    {MyBorrowsItems}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {getBorrowList:bindActionCreators(getBorrowList,dispatch)}
  }

const MyBorrows = connect(mapStateToProps,mapDispatchToProps)(MyBorrowsWrap)

export default MyBorrows;
