import React, { Component } from 'react';
import './InvestLogItem.scss'

class InvestLogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){

      const InvestLogMsgs = this.props.InvestLogMsgs

      return(
        <li className="InvestLogItem">
            <div>
                {InvestLogMsgs.User}
            </div>
            <div>
                <p className="InvestLogMoney">{InvestLogMsgs.Money}</p>
                <p className="InvestLogDate">{InvestLogMsgs.UserInvestProjectTime}</p>
            </div>
        </li>
      )
  }
}

export default InvestLogItem