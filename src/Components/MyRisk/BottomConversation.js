import React, { Component } from 'react';
import './BottomBtn.scss'
class BottomConversation extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    changeBottomValue(index){
        this.props.changeBottom(index)
    }


    render() {
        const BottomArr = this.props.data

        const _class = this.props._class

        const Spans = BottomArr.map((item,index)=>{
            return (
                <p className={_class[index]} key={index} onClick={this.changeBottomValue.bind(this,index)}>{item}</p>
            )
        })

        return (
            <div className="BottomBtn">
                {Spans}
            </div>
        );
    }
}

export default BottomConversation;