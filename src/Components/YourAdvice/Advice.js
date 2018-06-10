import React, { Component } from 'react';
import './advice.scss'
import TopBar from '../../PubComponents/TopBar';
import {Button} from 'antd-mobile';
import BottomTab from '../../PubComponents/BottomTab';
class Advice extends Component {
    constructor(props){
        super(props)
        this.state={
            StarArr:[1,1,1,1,0],
            numbers:5,
            Comments:['不予置评','不满意','一般','满意','非常满意']
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

    componentWillMount(){
        const x = this.state.numbers
        this.renderArr(x)
    }

    render() {

        return (
            <div className='Advice'>
                <TopBar title="意见反馈"/>
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
                        <i className="iconfont" style={{
                            fontSize:30,
                            color:this.state.StarArr[4]
                        }}
                        onClick={this.changeNumber.bind(this,5)}
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
                    placeholder="最多输入120字">
                    </textarea>
                    <Button className="SubmitBtn" type='primary'>提交</Button>
                </div>
            </div>
        );
    }
}

export default Advice;