import React, { Component } from 'react';
import {Link} from "react-router";
import "./ProjectBDetail.scss";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Progress,Accordion, List } from 'antd-mobile';
import Scaleplate from "../../utils/Scale";
import createMemoryHistory from 'history/lib/createMemoryHistory';
const history = createMemoryHistory();

class ProjectBDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  over(now,percent){
    document.querySelector('.ProfitNumber').innerText = now;
    document.querySelector('.ProfitMoney').innerText = now*percent/100;
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

//   componentDidMount(){
//     //   const {store} = this.context
//     //   console.log(store.getState())
//     console.log(this.context)
//   }

  render(){

    var data = this.props.location.state;

    const {Title,User,TotalMoney,Months,YearPercent,
            Percent,Condition,
            PaymentWay,MonthPay,
            S_剩余投资额,Id,
            PaymentChannels,Sfz,
        } = data
    const ProjectBOrderMsgs = {
        S_剩余投资额:S_剩余投资额
    }

    return(
        <div className="ProjectBDetail">
            <div className="ProjectBanner">
                <p>项目详情</p>
                <p>{Title}</p>
                <span className="PushBack" onClick={()=>history.goBack()}>back</span>
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
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header="项目详情">
                    <div className="AccordionPanel">
                        <p>计息日期：</p>
                        <p>还款方式：</p>
                        <p>月还本息：</p>
                        <p>状态：</p>
                    </div>
                </Accordion.Panel>
                <Accordion.Panel header="借款人信息" className="pad">
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
                <Accordion.Panel header="相关证明" className="pad">
                    <div className="AccordionPanel3">
                        text
                    </div>
                </Accordion.Panel>
                <Accordion.Panel header="借款描述" className="pad">
                    <div className="AccordionPanel3">
                        text
                    </div>
                </Accordion.Panel>
                <Accordion.Panel header="投资记录" className="pad">
                    <div className="AccordionPanel3">
                        text
                    </div>
                </Accordion.Panel>
                </Accordion>
            </div>
            <Link className="InvestButton" to={{
                pathname: `ProjectBOrder/${Id}`,
                state:""
            }}>
                我要投资
            </Link>
        </div>
    )
  }
}



export default ProjectBDetail