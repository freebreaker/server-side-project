import React, { Component } from 'react';
import { Accordion } from 'antd-mobile';
import PanelHeader from '../../PubComponents/PanelHeader.js'

class AccordionPanel2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      
    const {Title,N_年化利率,Z_总金额,Q_期限_Text,S_剩余投资额,EndDate,F_放款时间,M_每月还钱数
        ,PayTypeText,ProjectStateText,Detail,B_保障方式_Text,CompanyName,Borrow} = this.props.AccordionMsgs
    
    var BorrowInstances = this.props.BorrowInstances
    
    const IsCompanyUser =this.props.IsCompanyUser

    const CompanyUserImgId = this.props.AccordionModel.CompanyInfoId

    var ImgSrc=[]

    if(BorrowInstances.length>0){
        var BorrowFirstArr = BorrowInstances.filter(function(item){
            return item.BorrowinfoModel.BorrowConfigModel.Text === "借款企业基本信息"
        })
        var ConditionFirstArr = BorrowInstances.filter(function(item){
            return item.BorrowinfoModel.BorrowConfigModel.Text === "借款企业经营状况"
        })
        var BorrowFirstArr = BorrowInstances.filter(function(item){
            return item.BorrowinfoModel.BorrowConfigModel.Text === "借款企业基本信息"
        })
        var DetailUseFirstArr = BorrowInstances.filter(function(item){
            return item.BorrowinfoModel.BorrowConfigModel.Text === "详细资金用途"
        })
        var InvestigationFirstArr = BorrowInstances.filter(function(item){
            return item.BorrowinfoModel.BorrowConfigModel.Text === "调查"
        })
        var BeforeSixMonthFirstArr = BorrowInstances.filter(function(item){
            return item.BorrowinfoModel.BorrowConfigModel.Text === "截至借款前六个月内借款企业征信报告中逾期情况"
        })
        var AssureFirstArr = BorrowInstances.filter(function(item){
            return item.BorrowinfoModel.BorrowConfigModel.Text === "担保方"
        })
        var AssureMsgsFirstArr = BorrowInstances.filter(function(item){
            return item.BorrowinfoModel.BorrowConfigModel.Text === "担保方信息"
        })

        var Type9Arr = BorrowInstances.filter(function(item){
            return  item.BorrowinfoModel.BorrowConfigModel.Type === 9
        })

        var CompanyArr = BorrowInstances.filter(function(item){
            return  item.BorrowinfoModel.BorrowConfigModel.Type === 9
        })
    }

    if(Type9Arr){
        Type9Arr.forEach(element => {
            ImgSrc.push(element.Link)
        });
    }

    
    // const {Y_逾期金额,Y_严重逾期,Y_逾期次数,S_申请借款笔数,H_还清笔数,D_待还本息,J_借款总额,C_成功借款笔数} = this.props.AccordionModel
    
    // const {FullName,Sfz,S_授信额度} = this.props.UserInfo

    const ImgWrap = ImgSrc.map((item,index)=>{

        const ImgSource = "/GetFileData/"+ item

        return (
            <div className='ImgItem' key={index}>
                <img alt=''src={ImgSource}/>
            </div>
        )
    })

    const CompanyImgWrap = [1].map((item,index)=>{

        const CompanyUserImgSource = "/GetCompanyUserBusinessLicense/"+CompanyUserImgId

        const CompanyUserImgSource2 = "/GetCompanyUserPlaceOfBusiness/"+CompanyUserImgId

        return(
            <div className="ImgWrap" key={index}>
                <div className='ImgItem' >
                    <img alt=''src={CompanyUserImgSource}/>
                </div>
                <div className='ImgItem'>
                    <img alt=''src={CompanyUserImgSource2}/>
                </div>
            </div>
        )
    })

      return(
        <div style={{marginBottom: 20 }}>
        <Accordion className="my-accordion" onChange={this.onChange}>
        <Accordion.Panel header={<PanelHeader text="项目详情" source="#icon--1"/>}>
            <div className="AccordionPanel">
                <div>投标截止日期：{EndDate}</div>
                <div>起息日期：{F_放款时间}</div>
                <div>保障方式：{B_保障方式_Text}</div>
                <div>还款方式：{PayTypeText}</div>
                <div>月还本息：{M_每月还钱数}</div>
                <div>状态：{ProjectStateText}</div>
            </div>
        </Accordion.Panel>
        <Accordion.Panel header={<PanelHeader text="借款企业介绍" source="#icon-jiekuanshenqing"/>} className="pad">
            <div className="AccordionPanel2">
                <p>借款企业：{CompanyName}</p>
                <p>{this.props.BorrowDetail}</p>
            </div>
        </Accordion.Panel>
        <Accordion.Panel header={<PanelHeader text="风控信息" source="#icon-gongchengjungongyanshouzhengming"/>} className="pad">
        <div className="AccordionPanel2">
                <p>借款企业基本信息：{BorrowFirstArr?BorrowFirstArr[0].Value:""}</p>
                <p>借款企业经营状况：{ConditionFirstArr?ConditionFirstArr[0].Value:""}</p>
                <p>详细资金用途：{DetailUseFirstArr?DetailUseFirstArr[0].Value:""}</p>
                <p>调查：{InvestigationFirstArr?InvestigationFirstArr[0].Value:""}</p>
                <p>负债情况:暂无</p>
                <p>借款企业在其他网络借贷平台借款情况:暂未发现</p>
                <p>截至借款前六个月内借款企业征信报告中逾期情况:{BeforeSixMonthFirstArr?BeforeSixMonthFirstArr[0].Value:""}</p>
                <p>担保方：{AssureFirstArr?AssureFirstArr[0].Value:""}</p>
                <p>担保方信息:{AssureMsgsFirstArr?AssureMsgsFirstArr[0].Value:""}</p>
            </div>
        </Accordion.Panel>
        <Accordion.Panel header={<PanelHeader text="相关证明" source="#icon-jinrongxianxingge-"/>} className="pad">
        <div className="AccordionPanel3">
                <div className="AccordionPanel3">
                    <div className="ImgWrap">
                        {ImgWrap}
                    </div>
                </div>
            </div>
        </Accordion.Panel>
        {IsCompanyUser?
        <Accordion.Panel header={<PanelHeader text="企业相关证明" source="#icon-jinrongxianxingge-"/>} className="pad">
        <div className="AccordionPanel3">
                <div className="AccordionPanel3">
                        {CompanyImgWrap}
                </div>
            </div>
        </Accordion.Panel>
        :""}
        <Accordion.Panel header={<PanelHeader text="借款描述" source="#icon-gongchengjungongyanshouzhengming"/>} className="pad">
        <div className="AccordionPanel2">
        {Detail}
        </div>
        </Accordion.Panel>
        </Accordion>
    </div>
      )
  }
}

export default AccordionPanel2