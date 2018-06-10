import React, { Component } from 'react';
import "./myGiftItem.scss";
import {Link} from 'react-router';

class MyGiftItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const LeftColor = this.props.LeftFontColor
        const RightColor = this.props.RightFontColor
        return (
            <div className="MyGiftItem">
                <div className="MyGiftItemTitle">{this.props.title}</div>
                <div className="MyGiftItemMsgs">
                    <div className="MyGiftDetails">
                        {this.props.ShouldImg < 2 ?
                        <p>
                            <span className="RMoney">{this.props.RMoney}</span>
                            <span>R币</span>
                        </p>:
                        <p>
                            <svg className={LeftColor} aria-hidden="true" style={{
                                    width: '50px',
                                    height: '40px',
                                }} >
                                    <use xlinkHref={this.props.ImgValue}></use>
                            </svg>
                        </p>}
                        <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                        <span>{this.props.LeftMsgs}</span>
                        <p style={{marginTop:10,color:"#888"}}>{this.props.LeftMsgs2}</p>
                        </Link>
                    </div>
                    <div className="MyGiftDetails">
                    <p>
                        <svg className={RightColor} aria-hidden="true" style={{
                                width: '50px',
                                height: '40px'
                            }} >
                                <use xlinkHref={this.props.ImgValue2}></use>
                        </svg>
                    </p>

                        <Link to={{
                            pathname:'Recharge',
                            state:''
                        }}>
                        <span>{this.props.RightMsgs}</span>
                        </Link>
                    </div>
                </div>
                <div className="RCoin">
                    <Link className="RCoinMsgs">
                        {this.props.intruduction}
                    </Link>
                </div>
            </div>
        );
    }
}

export default MyGiftItem;