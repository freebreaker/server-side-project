import React, { Component } from 'react';
import { Accordion } from 'antd-mobile';
import PanelHeader from '../../PubComponents/PanelHeader.js'

class AccordionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      
    const {Title,N_年化利率,Z_总金额,Q_期限_Text,S_剩余投资额,EndDate,F_放款时间,M_每月还钱数
        ,PayTypeText,ProjectStateText,Detail,X_下一还款日} = this.props.AccordionMsgs
    
    const {Y_逾期金额,Y_严重逾期,Y_逾期次数,S_申请借款笔数,H_还清笔数,D_待还本息,J_借款总额,C_成功借款笔数} = this.props.AccordionModel
    
    const {FullName,Sfz,S_授信额度} = this.props.UserInfo

    const IsCompanyUser =this.props.IsCompanyUser

    const CompanyUserImgId = this.props.AccordionModel.CompanyInfoId

    const ImgWrap = this.props.ImgSrc.map((item,index)=>{

        const ImgSource = "/GetUserInfoView/"+ item

        return (
            <div className='ImgItem' key={index}>
                <img alt=''src={ImgSource}/>
            </div>
        )
    })

    const CarCompanyImgWrap = [1].map((item,index)=>{

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
                <div>计息日期：{F_放款时间}</div>
                <div>还款方式：{PayTypeText}</div>
                <div>月还本息：{M_每月还钱数}</div>
                <div>状态：{ProjectStateText}</div>
                <div>还款日：{X_下一还款日}</div>
            </div>
        </Accordion.Panel>
        <Accordion.Panel header={<PanelHeader text="借款人信息" source="#icon-jiekuanshenqing"/>} className="pad">
            <div className="AccordionPanel2">
                <span>姓名：{FullName}</span>
                <span>年龄：</span>
                <p>身份证号：{Sfz}</p>
                <span>申请借款：{S_申请借款笔数}</span>
                <span>信用额度：{S_授信额度}</span>
                <span>逾期金额：{Y_逾期金额}</span>
                <span>成功借款：{C_成功借款笔数}笔</span>
                <span>借款总额：{J_借款总额}</span>
                <span>逾期次数：{Y_逾期次数}</span>
                <span>还清笔数：{H_还清笔数}笔</span>
                <span>待还本息：{D_待还本息}</span>
                <span>严重逾期：{Y_严重逾期}笔</span>
            </div>
        </Accordion.Panel>
        <Accordion.Panel header={<PanelHeader text="相关证明" source="#icon-gongchengjungongyanshouzhengming"/>} className="pad">
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
                        {CarCompanyImgWrap}
                </div>
            </div>
        </Accordion.Panel>
        :""}
        <Accordion.Panel header={<PanelHeader text="借款描述" source="#icon-jinrongxianxingge-"/>} className="pad">
            <div className="AccordionPanel4">
                {Detail}
            </div>
        </Accordion.Panel>
        </Accordion>
    </div>
      )
  }
}

export default AccordionPanel