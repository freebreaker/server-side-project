import React, { Component } from 'react';
import {Link} from "react-router";
import "./ProjectBDetail.scss";
import { Progress,Accordion } from 'antd-mobile';
import Scaleplate from "../../utils/Scale";
import { connect } from 'react-redux';
import {changeSelectedValue} from "../../actions/index"
import {bindActionCreators} from 'redux'
import PanelHeader from '../../PubComponents/PanelHeader.js'
import "../../PubComponents/iconfont.js"
import BottomTab from "../../PubComponents/BottomTab.js"

class ProjectBDetailWrap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  over(now,percent){
    document.querySelector('.ProfitNumber').innerText = now;
    document.querySelector('.ProfitMoney').innerText = now*percent/100;
  }

  pushLogIn(value){
      this.props.changeSelectedValue(value)
  }

  componentDidMount(){
      let data = this.props.location.state;
      Scaleplate({
	        container : 'scale',
	        width : document.getElementById('scale').offsetWidth,
	        height : 50,
	        start : 0,
	        end : data.S_剩余投资额,
	        def : data.S_剩余投资额/2,
	        unit : 6.3,
	        linecolor : '#cddaef',
	        scaleplate : {
				color :"#ababad",
				fontcolor: "#ababad",
            },
            percent:data.YearPercent
      },this.over)
  }

  render(){

    var data = this.props.location.state;

    const {Title,User,TotalMoney,Months,YearPercent,
            Percent,Condition,
            PaymentWay,MonthPay,
            S_剩余投资额,Id,
            PaymentChannels,Sfz,InvestPermisson
        } = data
    const ProjectBOrderMsgs = {
        S_剩余投资额:S_剩余投资额
    }

    return(
        <div className="ProjectBDetail">
            <div className="ProjectBanner">
                <p>项目详情</p>
                <p>{Title}</p>
                <Link className="PushBack" 
                to={{
                    pathname:"/"
                }}
                onClick={this.pushLogIn.bind(this,1)}>back</Link>
                <div className="TotalMsgs">
                    <div className="YearPercent">
                        <p>预期年化收益率</p>
                        <span>{YearPercent}</span>%
                    </div>
                    <div className="TimeMsgs">
                        <div>
                            <p className="MsgsP">标的总额</p>
                            <span>{TotalMoney}</span>
                        </div>
                        <div>
                            <p className="MsgsP">项目期限</p>
                            <span>{Months}</span>
                        </div>
                        <div>
                        <p className="MsgsP">剩余额度（元）</p>
                        <span>{S_剩余投资额}</span>
                        </div>

                    </div>
                    <div className="show-info">
                        <div className="progress">
                            <Progress percent={Percent} position="normal" />
                        </div>                    
                        <div aria-hidden="true">{Percent}%</div>
                    </div>
                </div>
            </div>
            <div className="Profit">
                <p className="ProfitP">买多少(元)</p>
                <p className="ProfitNumber"></p>
            </div>
            <div id="scale"></div>
            <div className="Profit">
                <p className="ProfitP">预计一年收益(元)</p>
                <p className="ProfitMoney"></p>
            </div>
            <div style={{marginBottom: 110 }}>
                <Accordion className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header={<PanelHeader text="项目详情" source="#icon--1"/>}>
                    <div className="AccordionPanel">
                        <div>计息日期：</div>
                        <div>还款方式：</div>
                        <div>月还本息：</div>
                        <div>状态：</div>
                    </div>
                </Accordion.Panel>
                <Accordion.Panel header={<PanelHeader text="借款人信息" source="#icon-jiekuanshenqing"/>} className="pad">
                    <div className="AccordionPanel2">
                        <span>姓名：{User.FullName}</span>
                        <span>年龄：</span>
                        <p>身份证号：</p>
                        <span>申请借款：</span>
                        <span>信用额度：</span>
                        <span>逾期金额：</span>
                        <span>成功借款：</span>
                        <span>借款总额：</span>
                        <span>逾期次数：</span>
                        <span>还清笔数：</span>
                        <span>待还本息：</span>
                        <span>严重逾期：</span>
                    </div>
                </Accordion.Panel>
                <Accordion.Panel header={<PanelHeader text="相关证明" source="#icon-gongchengjungongyanshouzhengming"/>} className="pad">
                    <div className="AccordionPanel3">
                        text
                    </div>
                </Accordion.Panel>
                <Accordion.Panel header={<PanelHeader text="借款描述" source="#icon-jinrongxianxingge-"/>} className="pad">
                    <div className="AccordionPanel3">
                        text
                    </div>
                </Accordion.Panel>
                <Accordion.Panel header={<PanelHeader text="投资记录" source="#icon-jilu2"/>} className="pad">
                    <div className="AccordionPanel3">
                        text
                    </div>
                </Accordion.Panel>
                </Accordion>
            </div>
            {InvestPermisson?
            <Link className="InvestButton" to={{
                pathname: `ProjectBOrder/${Id}`,
                state:""
            }}>
                我要投资
            </Link>:
            <Link className="InvestButton" to={{
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
      selectedTab:state.selectedValue
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSelectedValue:bindActionCreators(changeSelectedValue,dispatch)
    }
}

const ProjectBDetail = connect(mapStateToProps,mapDispatchToProps)(ProjectBDetailWrap)

export default ProjectBDetail