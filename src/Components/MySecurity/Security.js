import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import {Accordion,Button} from 'antd-mobile';
import InputItem from '../../PubComponents/InputItem';
import PanelHeader from '../../PubComponents/PanelHeader.js'
import TopBar from '../../PubComponents/TopBar';
import './security.scss'

class Security extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        return (
            <div className="Security">
                <TopBar title="安全中心"/>
                <BottomTab/>
                <div className="SafeCenter">
                    <Accordion className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header={<PanelHeader text="用户信息" source="#icon--1"/>}>
                            <div className="AccordionPanel">
                                <div>手机号：</div>
                                <div>姓名：</div>
                                <div>身份证：</div>
                                <div>邮箱：</div>
                                <div>富有认证：</div>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel header={<PanelHeader text="登录密码" source="#icon-miaoshu"/>}>
                            <div className="AccordionPanel">
                            <div>
                                <InputItem
                                    Title='旧密码'
                                    Kind="password"
                                    TagName="PW"
                                    placeholderText='******'
                                ></InputItem>
                                <InputItem
                                    Title='新密码'
                                    Kind="password"
                                    TagName="PW"
                                    placeholderText='******'
                                ></InputItem>
                                <InputItem
                                    Title='确认新密码'
                                    Kind="password"
                                    TagName="PW"
                                    placeholderText='******'
                                ></InputItem>
                                <Button className="SubmitBtn" type='primary'>提交</Button>
                                </div> 
                            </div>
                            
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        );
    }
}

export default Security;