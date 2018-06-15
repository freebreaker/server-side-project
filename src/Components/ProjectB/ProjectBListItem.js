import React, { Component } from 'react';
import {Link} from "react-router";
import './ProjectBListItem.scss'

class ProjectBListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){

      const Data = this.props.ProjectBItemArray;

      const data = {
        Title:Data.Title,
        User:Data.User,
        TotalMoney:Data.Z_总金额,
        Months:Data.B_保障方式,
        YearPercent:Data.N_年化利率,
        Id:Data.Id,
        Percent:Data.Progress,
        Condition:BtnValue,
        PaymentWay:Data.PayTypeText,
        MonthPay:Data.M_每月还钱数,
        S_剩余投资额:Data.S_剩余投资额,
        PayTypeText:Data.PayTypeText,
        Condition:Data.H_还款状态,
    }
    
    let BtnValue = Data.S_剩余投资额>0?"抢购":"已满标"

    const LoanClass = BtnValue =="抢购"?"LoanBtn":"LoanFullBtn"

      return(
        <div className="ProjectBListItem">
                <div className="CarInfoTitle">
                    <div>
                        <i className="iconfont" style={{
                            color:"#3ebcd0"
                        }}>&#xe61f;</i>
                        <Link to={{
                                pathname: `ProjectBDetail/${Data.Id}`,
                                state:data
                                }}>{Data.Title}
                        </Link>
                    </div>
                    <span>
                          剩余投资额：{Data.S_剩余投资额}
                    </span>
                </div>
                <div className="CarInfoItem">
                    <div className="ExpectedAnnual">
                      <span>{Data.N_年化利率}.00</span>%
                      <p>往期年化收益率</p>
                    </div>

                    <div className="LoanLimit">
                    <span>{Data.B_保障方式}</span>个月
                    <p>借款期限</p>
                    </div>

                    <div  className={LoanClass}>
                      <Link to={{
                          pathname: `ProjectBDetail/${data.Id}`,
                          state: data,
                          }}>{BtnValue}
                      </Link>
                    </div>
                </div>
            </div>
      )
  }
}

export default ProjectBListItem