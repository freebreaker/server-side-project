import React, { Component } from 'react';
import {Link} from "react-router";
import ProjectBListItem from './ProjectBListItem'
import {connect} from 'react-redux';
import TopBar from '../../PubComponents/TopBar';

class ProjectBListWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount(){
    console.log(this.props)
  }


  render(){
    const ProjectBListArray = this.props.data.Data

    let ProjectBListItems = ProjectBListArray.map((item,index) => {

        return (
            <li key={index}>
                <ProjectBListItem ProjectBItemArray = {item}/>
            </li>
        )
    })

    return(
        <div className="ProjectBList">
            <TopBar title="散标"/>
            <ul style={{
                marginTop:'40px'
            }}>
                {ProjectBListItems}
                <button>立即投资</button>
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
        onClick: () => {
            dispatch({
                type: 'SET_FILTER',
                filter: ownProps.filter
            })
        }
    }
  }
const ProjectBList = connect(mapStateToProps,mapDispatchToProps)(ProjectBListWrap)

export default ProjectBList