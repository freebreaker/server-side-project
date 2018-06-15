import React, { Component } from 'react';
import BottomTab from "../../PubComponents/BottomTab.js"
import TopBar from "../../PubComponents/TopBar.js"
import InvestLogItem from './InvestLogItem'
import axios from 'axios'


class ProjectBDetailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        InvestLogList:[]
    };
  }

componentDidMount(){

    let _this = this

    let Id = this.props.location.state.ProjectDetailListId

    var urlId = "/Api/GetProjectBDetailList/"+Id

    axios({
        method:"POST",
        url:urlId,
        withCredentials:true      
    }).then(function (response) {
        _this.setState({
            InvestLogList:response.data
        })
      }).catch(function (error) {
        console.log(error);
    });
}


  render(){
    const InvestLogItems=this.state.InvestLogList.map((item,index)=>{
        return(
            <InvestLogItem key={index}
            InvestLogMsgs={item}
            />
        )
    })

    const Id = this.props.location.state.ProjectDetailListId

    const BackToId = '/ProjectBDetail/' + Id
    
      return(
        <div className="ProjectBOrder" style={{paddingTop:40}}>
              <TopBar title="投资记录" BackTo={BackToId} Id={Id}/>
              <BottomTab/>
              <ul style={{width:"100%",padding:0}}>
                  {InvestLogItems}
              </ul>
        </div>
      )
  }
}

export default ProjectBDetailList