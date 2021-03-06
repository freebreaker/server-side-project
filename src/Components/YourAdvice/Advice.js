import React, { Component } from 'react';
import './advice.scss'
import TopBar from '../../PubComponents/TopBar';
import {Button} from 'antd-mobile';
import axios from 'axios'
import {Modal} from 'antd-mobile'
import BottomTab from '../../PubComponents/BottomTab';
class Advice extends Component {
    constructor(props){
        super(props)
        this.state={
            StarArr:[1,1,1,1,0],
            numbers:4,
            Comments:['不满意','一般','满意','非常满意'],
            Suggestion:""
        }
    }

    renderArr(x){
        const newStarArr = this.state.StarArr
        for(let i=0;i<x;i++){
            newStarArr[i] = 'orange'
        }
        for(let j=x;j<newStarArr.length;j++){
            newStarArr[j] = '#888888'
        }
        this.setState({
            StarArr:newStarArr,
            numbers:x
        })
    }

    changeNumber(number){
        this.renderArr(number)
    }

    SendFeedBack(){
        const _this = this
        axios({
            method:"POST",
            url:"Api/SaveFeedback",
            data:{
                type:_this.state.numbers,
                content:_this.state.Suggestion
            },
            withCredentials:true      
        }).then(function (response) {
            if(response.data.Success){
                Modal.alert(
                    "提交成功",
                    "感谢您的宝贵意见！",
                    [
                        { text: '确定', onPress: () => console.log('ok') }
                    ]
                )
            }else{
                Modal.alert(
                    "提交失败",
                    "请重新提交！",
                    [
                        { text: '确定', onPress: () => console.log('ok') }
                    ]
                )
            }
          })
    }
    handleChange(e){
        this.setState({
            Suggestion:e.target.value
        })
    }

    componentWillMount(){
        const x = this.state.numbers
        this.renderArr(x)
    }

    render() {

        return (
            <div className='Advice'>
                <TopBar title="意见反馈" BackTo='/'/>
                <BottomTab/>
                <div className='AdviceStar'>
                    <p className="Judge">您的评价让我们做的更好！</p>
                    <div className="StarFive">
                        <i className="iconfont" style={{
                            fontSize:30,
                            color:this.state.StarArr[0]
                        }}
                        onClick={this.changeNumber.bind(this,1)}
                        >&#xe62f;</i>
                        <i className="iconfont" style={{
                            fontSize:30,
                            color:this.state.StarArr[1]
                        }}
                        onClick={this.changeNumber.bind(this,2)}
                        >&#xe62f;</i>
                        <i className="iconfont" style={{
                            fontSize:30,
                            color:this.state.StarArr[2]
                        }}
                        onClick={this.changeNumber.bind(this,3)}
                        >&#xe62f;</i>
                        <i className="iconfont" style={{
                            fontSize:30,
                            color:this.state.StarArr[3]
                        }}
                        onClick={this.changeNumber.bind(this,4)}
                        >&#xe62f;</i>
                    </div>
                    <p className="Comment">{this.state.Comments[this.state.numbers-1]}</p>
                </div>
                <div className='AdviceMsgs'>
                    <p>
                        <svg className="icon" aria-hidden="true" style={{
                            width: '22px',
                            height: '22px',
                        }} >
                            <use xlinkHref="#icon-jilu1"></use>
                        </svg>
                        <span>留下您的宝贵意见！</span>
                    </p>
                    <textarea className='AdviceText'
                    placeholder="最多输入120字" onChange={(e)=>this.handleChange(e)}>
                    </textarea>
                    <Button className="SubmitBtn" type='primary' onClick={this.SendFeedBack.bind(this)}>提交</Button>
                </div>
            </div>
        );
    }
}

export default Advice;