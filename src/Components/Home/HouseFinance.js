import React, { Component } from 'react';

class HouseFinance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <svg className="icon" aria-hidden="true" style={{
              width: '22px',
              height: '16px',
          }} >
              <use xlinkHref="#icon-fangdai"></use>
          </svg>
      )
  }
}

export default HouseFinance