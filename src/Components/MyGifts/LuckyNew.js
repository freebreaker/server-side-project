import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import './rMoneyText.scss'
import './luckyNew.scss';
import turntableDraw from '../../utils/Rotate.js'
import drawBgImg from "../../images/drawBgImg.png";
import drawBgCenter from "../../images/drawBgCenter.png";
import axios from 'axios'
import {Modal} from 'antd-mobile'
// import {bindActionCreators} from 'redux'

class LuckyNew extends Component {
    constructor(props) {
        super(props);
        this.state={
            RMoney:this.props.location.state.RMoney,
            mssg:"还差一点哦~"
        }
    }


    componentDidMount(){
        const _this = this
        axios({
            method:"POST",
            url:"RefreshUserModel",
            withCredentials:true
        }).then(function(response){
            _this.setState({
                RMoney:response.data.Data.RMoney
            })
        }).catch(function (error) {
        console.log(error);
    });

    }

    rotate(){

        const _this = this

        var newdraw2 =new turntableDraw('.drawBtn',{
            share:14,
            speed:"3s",
            velocityCurve:"ease",
            weeks:6,
            callback:function(num)
            {
                if (_this.state.mssg == null){
                    Modal.alert(
                        "操作成功！",
                        "还差一点点哦~",
                        [
                            { text: '确定', onPress: () => console.log('ok') }
                        ]
                    );
                }
                else{
                    Modal.alert(
                        "抽奖成功！",
                        "恭喜你获得"+_this.state.mssg,
                        [
                            { text: '确定', onPress: () => console.log('ok') }
                        ]
                    );
        
                }
            },
        });
       
        axios({
            method:"POST",
            url:"/GetLucky",
            withCredentials:true
        }).then(function(response){
            if (response.data.Success)
            {
                var index = 5;
                switch (response.data.Data[0]){
                    case '9':
                        index = 1;
                        break;
                    case '19':
                        index = 9;
                        break;
                    case '18':
                        index = 3;
                        break;
                    case '25':
                        index = 6;
                        break;
                    case '12':
                        index = 14;
                        break;
                    case '1':
                        index = 10;
                        break;
                    case '20':
                        index = 8;
                        break;
                    case '24':
                        index = 13;
                        break;
                    case '17':
                        index = 7;
                        break;
                    default:
                        index = 5;
                        break;
                }
                _this.setState({
                    money:response.data.Data[1],
                    mssg:response.data.Msg
                })
                newdraw2.goto(index);
            }else{
                Modal.alert(
                    "抽奖失败！",
                    response.data.Msg,
                    [
                        { text: '确定', onPress: () => console.log('ok') }
                    ]
                );
            }
        }).catch(function (error) {
        console.log(error);
    });
    }

    render() {
        return (
            <div className="" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title="我的抽奖" BackTo ="/MyGifts" Id={this.props.location.state.Id}/>
                <div className='LuckyNew'>
                <div>
                    <h2>您共有{this.state.RMoney}个R币</h2>
                    <div className="box1">
                        <img src={drawBgImg} className="drawBg" alt=""/>
                        <a href="javascript:void(0)">
                            <img src={drawBgCenter} className="drawBtn" alt="" onClick={this.rotate.bind(this)}/>
                        </a>
                    </div>
`                </div>
                </div>
                <BottomTab/>
            </div>
        );
    }
}

export default LuckyNew;