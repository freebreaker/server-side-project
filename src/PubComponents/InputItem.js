import React, { Component } from 'react';

class InputItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.Title
        const type= this.props.Kind
        const _class = this.props.TagName
        const placeholderText = this.props.placeholderText
        return (
            <div className="InputItem">
            <span style={{paddingRight:10}}>{title}</span>
            <input className={_class} type={type} placeholder={placeholderText}></input>
            </div>
        );
    }
}

export default InputItem;
