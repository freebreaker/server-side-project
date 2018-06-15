import React, { Component } from 'react';
import {Link} from "react-router";
import "./ProjectBDetail.scss";
import { Progress } from 'antd-mobile';
import Scaleplate from "../../utils/Scale";
import axios from 'axios';
import { connect } from 'react-redux';
import {changeSelectedValue,getProjectBDt} from "../../actions/index"
import {bindActionCreators} from 'redux'
import AccordionPanel from './AccordionPanel'
import AccordionPanel2 from './AccordionPanel2'
import AccordionPanel1 from './AccordionPanel1'
import "../../PubComponents/iconfont.js"
import BottomTab from "../../PubComponents/BottomTab.js"

class ProjectBDetailWrap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        ProjectBDetailMsgs:"",
        UserInfo:'',
        ProjectBModel:"",
        BorrowModel:{},
        ImgSrc:[],
        IsCompanyUser:false,
        InvestMoney:"",
        SMoney:"",
        tips:""
    };
  }

  over(now,percent){
    document.querySelector('.ProfitNumber').value = now;
    document.querySelector('.ProfitMoney').innerText = now*percent/100;
  }

  pushLogIn(value){
      this.props.changeSelectedValue(value)
  }


    handleChange(e){
        if(e.target.value%100!=0){
            this.setState({
                InvestMoney:e.target.value,
                tips:"输入100的整数倍"
            })  
        }else if(e.target.value>this.state.SMoney){
            this.setState({
                InvestMoney:e.target.value,
                tips:"超出剩余额度"
            })  
        }else{
            this.setState({
                InvestMoney:e.target.value,
                tips:""
            })
        }
    }
  componentDidMount(){
      
    let _this = this

    let Id = this.props.location.state.Id

    var urlId = "/Api/GetProjectBDt/"+Id

    axios({
        method:"POST",
        url:urlId,
        withCredentials:true      
    }).then(function (response) {
        _this.setState({
            ProjectBDetailMsgs:response.data,
            UserInfo:response.data.User,
            ProjectBModel:response.data.ProjectBApiModel,
            ImgSrc:response.data.ProjectBApiModel.UserInfoList,
            BorrowModel: response.data.Borrow,
            BorrowInstances:response.data.Borrow.BorrowInstances,
            IsCompanyUser:response.data.IsCompanyUser,
            InvestMoney:response.data.S_剩余投资额,
            SMoney:response.data.S_剩余投资额
        })
      })
    .then(()=>{
        Scaleplate({
	        container : 'scale',
	        width : document.getElementById('scale').offsetWidth,
	        height : 50,
	        start : 0,
	        end : this.state.ProjectBDetailMsgs.S_剩余投资额,
	        def : this.state.ProjectBDetailMsgs.S_剩余投资额/2,
	        unit : 6.3,
	        linecolor : '#cddaef',
	        scaleplate : {
				color :"#ababad",
				fontcolor: "#ababad",
            },
            percent:this.state.ProjectBDetailMsgs.N_年化利率
      },this.over)
    })
    .catch(function (error) {
        console.log(error);
    });

      

    //   this.props.getProjectBDt(data.Id)
    //   let data = this.props.location.state;




      

  }

  render(){

    // var data = this.props.location.state;

    // console.log(this.props.ProjectBDt.User)
    
    // const {Title,User,TotalMoney,Months,YearPercent,
    //         Percent,Condition,
    //         PaymentWay,MonthPay,
    //         S_剩余投资额,Id,
    //         PaymentChannels,Sfz,InvestPermisson
    //     } = data
    // const ProjectBOrderMsgs = {
    //     S_剩余投资额:S_剩余投资额
    // }
    let Id = this.props.location.state.Id

    const {Title,N_年化利率,Z_总金额,Q_期限_Text,S_剩余投资额,EndDate,F_放款时间,M_每月还钱数
    ,PayTypeText,ProjectStateText,Detail} = this.state.ProjectBDetailMsgs

    const ProgressNumber = this.state.ProjectBDetailMsgs.Progress
    
    let ProjectBType = this.props.location.state.ProjectBType

    var ProjectBTypeWrap;

    switch(ProjectBType){
        case 2:
        ProjectBTypeWrap = <AccordionPanel2
        AccordionMsgs={this.state.ProjectBDetailMsgs} 
        BorrowDetail = {this.state.BorrowModel.Detail}
        BorrowInstances={this.state.BorrowInstances?this.state.BorrowInstances:[]}
        IsCompanyUser={this.state.IsCompanyUser}
        AccordionModel={this.state.ProjectBModel} 
        />
        break;
        case 1:
        ProjectBTypeWrap = <AccordionPanel 
        AccordionMsgs={this.state.ProjectBDetailMsgs} 
        AccordionModel={this.state.ProjectBModel} 
        UserInfo={this.state.UserInfo}
        ImgSrc={this.state.ImgSrc}
        IsCompanyUser={this.state.IsCompanyUser}
        />
        break;
        default:
        ProjectBTypeWrap = <AccordionPanel 
        AccordionMsgs={this.state.ProjectBDetailMsgs} 
        AccordionModel={this.state.ProjectBModel} 
        UserInfo={this.state.UserInfo}
        ImgSrc={this.state.ImgSrc}
        IsCompanyUser={this.state.IsCompanyUser}
        />
    }
    // const {FullName,Sfz,S_授信额度} = this.state.UserInfo

    // const {Y_逾期金额,Y_严重逾期,Y_逾期次数,S_申请借款笔数,H_还清笔数,D_待还本息,J_借款总额,C_成功借款笔数} = this.state.ProjectBModel
    

    return(
        <div className="ProjectBDetail">
            <div className="ProjectBanner">
                <p>项目详情</p>
                <p>{Title}</p>
                <Link className="PushBack" 
                to={{
                    pathname:"/"
                }}
                onClick={this.pushLogIn.bind(this,1)}>
                <i className="iconfont">&#xe645;</i>
                </Link>
                <div className="TotalMsgs">
                    <div className="YearPercent">
                        <p>预期年化收益率</p>
                        <span>{N_年化利率}</span>%
                    </div>
                    <div className="TimeMsgs">
                        <div>
                            <p className="MsgsP">标的总额</p>
                            <span>{Z_总金额}</span>
                        </div>
                        <div>
                            <p className="MsgsP">项目期限</p>
                            <span>{Q_期限_Text}</span>
                        </div>
                        <div>
                        <p className="MsgsP">剩余额度（元）</p>
                            <span>{S_剩余投资额}</span>
                        </div>

                    </div>
                    <div className="show-info">
                        <div className="progress">
                            <Progress percent={ProgressNumber} position="normal" />
                        </div>                    
                        <div aria-hidden="true">{ProgressNumber}%</div>
                    </div>
                </div>
            </div>
            <div className="Profit">
                <p className="ProfitP">买多少(元)</p>
                <input className="ProfitNumber" value={this.state.InvestMoney} onChange={(e)=>this.handleChange(e)}></input>
                <span className="ProfitTips">{this.state.tips}</span>
            </div>
            {/* <div className="ProjectBMoney">
                        <span onClick={this.reduceMoney.bind(this,100)}>-</span>
                        <input value={this.state.InvestMoney}
                                onChange={(e)=>this.handleChange(e)}
                        ></input>
                        <span onClick={this.addMoney.bind(this,100)}>+</span>
            </div> */}
            <div id="scale"></div>
            <div className="Profit">
                <p className="ProfitP">预计一年收益(元)</p>
                <p className="ProfitMoney"></p>
            </div>
            {ProjectBTypeWrap}
            <Link className="InvestLog" to={{
                pathname: `/ProjectDetailList/${Id}`,
                state:{
                    ProjectDetailListId:Id,
                }
            }}>
                投资记录
            </Link>
            {this.props.InvestPermisson?
            <Link className="InvestButton" to={{
                pathname: S_剩余投资额>0?`/ProjectBOrder/${Id}`:`/`,
                state:{
                    ProjectBId:Id,
                    S_剩余投资额:S_剩余投资额,
                    CanUseMoney:this.props.CanUseMoney
                }
            }}>
                {S_剩余投资额>0?"我要投资":"没有额度啦"}
            </Link>:
            <Link className="InvestButton" 
            to={{
                pathname: `/`,
            }} onClick={this.pushLogIn.bind(this,2)}>
                先登录 再投资
            </Link>
        }
        <BottomTab/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      selectedTab:state.selectedValue,
      InvestPermisson:state.IfLogIn.FetchSuccess,
      CanUseMoney:state.IfLogIn.CanUseMoney
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSelectedValue:bindActionCreators(changeSelectedValue,dispatch),
        getProjectBDt:bindActionCreators(getProjectBDt,dispatch)
    }
}

const ProjectBDetail = connect(mapStateToProps,mapDispatchToProps)(ProjectBDetailWrap)

export default ProjectBDetail