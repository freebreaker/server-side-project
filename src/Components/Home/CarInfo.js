import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import "./carinfo.scss";
import {Link} from "react-router";
class CarInfo extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title:""
  //   };
  // }

  // componentWillMount(){
  //   this.setState({
  //     title:this.props.name
  //   })
  // }

  render(){

      let Msgs = this.props.totalMsgs
      
      let InvestPermisson = this.props.InvestPermisson

      let {Title,N_年化利率,B_保障方式,Id,S_剩余投资额_XT,S_剩余投资额} = Msgs

      let BtnValue = S_剩余投资额>0?"抢购":"已满标"

      const data = {
          Title:Msgs.Title,
          User:Msgs.User,
          TotalMoney:Msgs.Z_总金额,
          Months:B_保障方式,
          YearPercent:N_年化利率,
          Id:Id,
          Percent:Msgs.Progress,
          Condition:BtnValue,
          PaymentWay:Msgs.PayTypeText,
          MonthPay:Msgs.M_每月还钱数,
          S_剩余投资额:S_剩余投资额,
          PayTypeText:Msgs.PayTypeText,
          Condition:Msgs.H_还款状态,
          InvestPermisson:InvestPermisson
      }

      const LoanClass = BtnValue =="抢购"?"LoanBtn":"LoanFullBtn"

      return(
          <div className="CarInfo">
                
                <div className="CarInfoTitle">
                    <div>
                        <i className="iconfont" style={{
                            color:"#3ebcd0"
                        }}>&#xe61f;</i>
                        <Link to={{
                                pathname:`ProjectBList`,
                                state:data
                                }}>{Title}
                        </Link>
                    </div>
                    <span>
                          剩余投资额：{S_剩余投资额_XT}
                    </span>
                </div>
                <div className="CarInfoItem">
                    <div className="ExpectedAnnual">
                      <span>{N_年化利率}.00</span>%
                      <p>往期年化收益率</p>
                    </div>

                    <div className="LoanLimit">
                    <span>{B_保障方式}</span>个月
                    <p>借款期限</p>
                    </div>

                    <div  className={LoanClass}>
                      <Link to={{
                          pathname: `ProjectBDetail/${Id}`,
                          state: data,
                          }}>{BtnValue}
                      </Link>
                    </div>
                </div>
                 
          </div>
      )
  }
}

export default CarInfo