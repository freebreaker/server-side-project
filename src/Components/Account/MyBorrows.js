
import React from 'react';
import {Link} from "react-router";
import { Form , Input,} from 'antd';
import "./myBorrows.scss";
import MyBorrowsItem from "./MyBorrowsItem"
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import axios from "axios"
import { getBorrowList } from '../../actions/index';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// @connect(
//     state=>state.MyBorrowList,
//     dispatch=>bindActionCreators(getBorrowList,dispatch)
//    )
class MyBorrows extends React.Component {
    constructor(props){
        super(props)
        this.state={
            MyBorrowList:[]
        }
    }
    componentDidMount(){
        const id = this.props.location.state.Id

        const _this = this

        axios({
            method:"POST",
            url:"api/GetMyProjectB",
            withCredentials:true      
        }).then(function (response) {
            _this.setState({
                MyBorrowList:response.data
            })
          })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        const projectList = this.state.MyBorrowList
        
        let MyBorrowsItems = projectList.map((item,index) => {
            return (
                <li key={index}>
                    <MyBorrowsItem infos={item}/>
                </li>
            )
        })
        return (
            <div className='MyBorrows'>
                <TopBar title="我的借款" BackTo='/'/>
                <BottomTab/>
                <ul>
                    {MyBorrowsItems}
                </ul>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         state
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {getBorrowList:bindActionCreators(getBorrowList,dispatch)}
// }

// const MyBorrows = connect(mapStateToProps,mapDispatchToProps)(MyBorrowsWrap)

export default MyBorrows;
