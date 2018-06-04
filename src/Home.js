import React, { Component } from 'react';
import BannerCarousel from "./Components/Home/Carousel";
import CarInfo from "./Components/Home/CarInfo";
import {connect} from 'react-redux';
import "./home.scss";
import { fetchList } from './actions/index';
import {bindActionCreators} from 'redux'
// import './Components/app.css'
// import axios from 'axios'
class HomePage extends React.Component {
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

    const listArray = CarInfoArray.length>0?CarInfoArray:[]

    let CarInfos = listArray.map((item,index)=>{

        // console.log(item)

        return (
          <li key={index}> 
              <CarInfo
              totalMsgs = {item} 
              // name={item.Pledge}  
              // ExpectedAnnual={item.N_年化利率} 
              // LoanLimit={item.B_保障方式}
              // ProjectId = {item.Id}
              // InvestMoney ={item.S_剩余投资额_XT}
              // InvestNumber ={item.S_剩余投资额}
          />
          </li>
        )
    })

    return(
        <div>
          <BannerCarousel/>
          <ul>
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

const Home = connect(mapStateToProps,mapDispatchToProps)(HomePage)

// Home.fetchData = function(){
//   return 4
// }


export default Home