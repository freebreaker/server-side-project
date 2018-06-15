
import React from 'react';
import "./myBorrowsItem.scss";
import {Link} from "react-router";
import { debug } from 'util';

class MyBorrowsItem extends React.Component {
    constructor(props){
        super(props)
        this.state={
            ifShowSpead:true
        }
    } 

    changeSpreadState(){
        this.setState({
            ifShowSpead:!this.state.ifShowSpead
        })
    }

    render() {
        const {Pledge,D_待还本金,Title,N_年化利率,Money,Y_已还期数,Q_期限_Text,
            PayTypeText,X_下一还款日,H_还款状态,M_每月还钱数,Detail,Z_总金额,Borrow} = this.props.infos

        const UrlProjectBId = "ProjectBDetail/"+ Borrow.ProjectBId 
        
        return (
            <div className='MyBorrowsItem'>
                <div className="MyBorrowsItemTitle">
                    {/* <Link to={{
                            pathname:`ProjectBList`
                            }}>{Pledge}
                    </Link>
                    <Link to={{
                        pathname:`ProjectBList`
                        }}>还款记录
                    </Link>
                    <Link className="MyDetail"
                        to={{
                        pathname:`ProjectBList`
                        }}>详情 >
                    </Link> */}
                    <Link className="MyDetail"
                        to={{
                        pathname:UrlProjectBId,
                        state:{
                            Id:Borrow.ProjectBId 
                        }
                        }}>{Title}>>
                    </Link>
                </div>
                <div className="BorrowInfoItem">
                    <div className="ExpectedAnnual">
                      <span>{Z_总金额}</span><span>元</span>
                      <p>借款金额</p>
                    </div>

                    <div className="ExpectedAnnual">
                    <span>{N_年化利率}</span><span>%</span>
                    <p>往期年化收益率</p>
                    </div>

                    <div  className="BorrowTime">
                    <span>{Y_已还期数}/{Q_期限_Text}</span>
                    <p>期数/周期</p>
                    </div>
                </div>
                {this.state.ifShowSpead?
                <div className="Spead" onClick={this.changeSpreadState.bind(this)}>
                    展开
                </div>:
                <div>
                    <div className="Spead" onClick={this.changeSpreadState.bind(this)}>
                    收起
                    </div>
                    <div className="SpeadInfo">
                        <p>还款方式：{PayTypeText}</p>
                        <p>下次还款：{X_下一还款日}</p>
                        <p>还款状态：{H_还款状态}</p>
                        <p>每月还款：{M_每月还钱数}</p>
                        <p>借款详情：{Detail}</p>
                    </div>
                </div>}                 
          </div>
        )
    }
}

export default MyBorrowsItem;
