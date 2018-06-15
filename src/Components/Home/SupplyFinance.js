import React from 'react';

class SupplyFinance extends React.Component {
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
          <use xlinkHref="#icon-tubiaozhexiantu"></use>
      </svg>
      )
  }
}

export default SupplyFinance