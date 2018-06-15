import React, { Component } from 'react';
import CarInfo from "../Home/CarInfo";
import {connect} from 'react-redux';
import "./home.scss";
import { fetchList } from '../../actions/index';
import {bindActionCreators} from 'redux'
import TopBar from '../../PubComponents/TopBar'
import BottomTab from '../../PubComponents/BottomTab'
// import './Components/app.css'
// import axios from 'axios'
class ProjectBListWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArray:[]
    };
  }


  componentWillMount(){
    console.log(this.props)
  }
  
  componentDidMount(){
    // this.props.getListData()
    // this.setState({
    //   listArray:this.props.data.Data
    // })
  }

  render(){
    
    const CarInfoArray = this.props.data.Data

    const InvestPermisson = this.props.data.IfLogIn.FetchSuccess

    const listArray = CarInfoArray.length>0?CarInfoArray:[]

    let CarInfos = listArray.map((item,index)=>{
        return (
          <li key={index} style={{background:"white"}}> 
              <CarInfo
              totalMsgs = {item} 
              InvestPermisson = {InvestPermisson}
          />
          </li>
        )
    })

    return(
        <div style={{paddingTop:40}}>
            <TopBar title="散标列表"/>
            <BottomTab/>
          <ul style={{padding:0}}>
            {CarInfos}
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      // onClick: () => {
      //     dispatch({
      //         type: 'SET_FILTER',
      //         filter: ownProps.filter
      //     })
      // }
      getListData:bindActionCreators(fetchList,dispatch)
  }
}

const ProjectBList = connect(mapStateToProps,mapDispatchToProps)(ProjectBListWrap)

// Home.fetchData = function(){
//   return 4
// }


export default ProjectBList