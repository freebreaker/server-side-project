import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';
import axios from 'axios';
import LeftConversation from './LeftConversation.js'
import RightConversation from './RightConversation.js'
import BottomConversation from './BottomConversation.js'
import $ from 'jquery'
import {Modal} from 'antd-mobile'
import './MyRisk.scss'

class MyRisk extends Component {
    constructor(props){
        super(props)
        this.state={
            titleArr:["1、您所处的人生阶段",'2、您的家庭年总收入为？','3、可用于金融投资（储蓄存款除外）的比例为？',"4、您的投资经验",
            "5、您目前投资的金融产品中，投资金额占比最多的是：","6、如果一项投资的往期年化收益率和期限如下，您会选择：","7、投资或将发生不确定的风险，以下哪一项是您可接受的最大限度的风险：",
             "8、近期有理财的规划吗：","9、您理财投资的年限？","10、您的家庭就业情况："],
            radioArr:[{
                msg:"",
                value:""
            },
            {
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            }],
            BottomArr:[
                {
                    data:["退休期：退休以后","退休前期：子女开始工作至本人退休","家庭与事业形成期：结婚到子女出生到完成高等教育","单身期：从参加工作到结婚"],
                    value:"",
                    _class:"BottomShow"
                },
                {
                    data:["5万元以下","5-15万元","15-50万元","50万元以上"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["小于10%","10%-25%","25%-50%","大于50%"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["有限：除银行活期定期存款意外，基本没有其他投资经验","一般：有过购买国债、货币基金以及银行保本型理财产品投资经验","丰富：具有一定的证券、基金、期货等投资经验","非常丰富：投资过P2P等网络平台"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["国债或存款","债券基金、保险等","P2P(网络借贷)","股票、股票型基金"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["1~3个月以内，8%","3~6个月，9%","6~12个月，10%","12个月以上，11%"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["本金损失5%以内","本金损失5%-10%","本金损失10%-20%","本金损失20%以上"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["完全没兴趣","有兴趣，但还未做过理财，希望开始理财","做过理财，有一定的了解，希望找到一些很好的理财项目","各方面理财都做，但倾向一些信托，基金类理财"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["2年以下","2-5年","5-10年 ","10年以上"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["您与配偶均无稳定收入","您与配偶只有一人有稳定收入","子女尚未独立，您与配偶均有稳定收入","子女均已独立，您与配偶均有稳定收入"],
                    value:"" ,
                    _class:"BottomHidden"
                }
                
                
        
            ],
            QuestionNo:1,
            value:["","","","","","","","","",""],
            SelectedClass:['NotSelected','NotSelected','NotSelected','NotSelected']
        }
    }

    init(){
        this.setState({
            titleArr:["1、您所处的人生阶段",'2、您的家庭年总收入为？','3、可用于金融投资（储蓄存款除外）的比例为？',"4、您的投资经验",
            "5、您目前投资的金融产品中，投资金额占比最多的是：","6、如果一项投资的往期年化收益率和期限如下，您会选择：","7、投资或将发生不确定的风险，以下哪一项是您可接受的最大限度的风险：",
             "8、近期有理财的规划吗：","9、您理财投资的年限？","10、您的家庭就业情况："],
            radioArr:[{
                msg:"",
                value:""
            },
            {
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            },{
                msg:"",
                value:""
            }],
            BottomArr:[
                {
                    data:["退休期：退休以后","退休前期：子女开始工作至本人退休","家庭与事业形成期：结婚到子女出生到完成高等教育","单身期：从参加工作到结婚"],
                    value:"",
                    _class:"BottomShow"
                },
                {
                    data:["5万元以下","5-15万元","15-50万元","50万元以上"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["小于10%","10%-25%","25%-50%","大于50%"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["有限：除银行活期定期存款意外，基本没有其他投资经验","一般：有过购买国债、货币基金以及银行保本型理财产品投资经验","丰富：具有一定的证券、基金、期货等投资经验","非常丰富：投资过P2P等网络平台"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["国债或存款","债券基金、保险等","P2P(网络借贷)","股票、股票型基金"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["1~3个月以内，8%","3~6个月，9%","6~12个月，10%","12个月以上，11%"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["本金损失5%以内","本金损失5%-10%","本金损失10%-20%","本金损失20%以上"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["完全没兴趣","有兴趣，但还未做过理财，希望开始理财","做过理财，有一定的了解，希望找到一些很好的理财项目","各方面理财都做，但倾向一些信托，基金类理财"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["2年以下","2-5年","5-10年 ","10年以上"],
                    value:"" ,
                    _class:"BottomHidden"
                },
                {
                    data:["您与配偶均无稳定收入","您与配偶只有一人有稳定收入","子女尚未独立，您与配偶均有稳定收入","子女均已独立，您与配偶均有稳定收入"],
                    value:"" ,
                    _class:"BottomHidden"
                }
            ],
            QuestionNo:1,
            value:["","","","","","","","","",""],
            SelectedClass:['NotSelected','NotSelected','NotSelected','NotSelected']
        
        })
    }

    AddQuestionNo(){
        this.setState({
            SelectedClass:['NotSelected','NotSelected','NotSelected','NotSelected']
        })
        if(this.state.value[this.state.QuestionNo-1]===""){
            Modal.alert(
                "提示",
                "您还未选择答案！",
                [
                    { text: '确定', onPress: () => console.log('ok') }
                ]
            )
        }else{
            if(this.state.QuestionNo<10){
                const targetArr = this.state.BottomArr
    
                for(let j=0;j<this.state.BottomArr.length;j++){
                    targetArr[j]._class="BottomHidden"
                }
        
                targetArr[this.state.QuestionNo]._class = "BottomShow"
        
                this.setState({
                    BottomArr:targetArr,
                    QuestionNo:this.state.QuestionNo+1
                })
            }else{
                Modal.alert(
                    "提示",
                    "已经是最后一题啦!",
                    [
                        { text: '确定', onPress: () => console.log('ok') }
                    ]
                )
            }
        }
    }

    changeBottom(index){

        const NewRadioArr = this.state.radioArr

        const QuestionNo = this.state.QuestionNo

        const valueArr = this.state.value

        const SelectedArr = this.state.SelectedClass

        valueArr[QuestionNo-1] = index+1

        const NewBottomArr = this.state.BottomArr.filter(function(x){
            return x._class === "BottomShow"
        })

        NewRadioArr[QuestionNo-1].msg = NewBottomArr[0].data[index]

        for(let x=0;x<SelectedArr.length;x++){
            SelectedArr[x]='NotSelected'
        }

        SelectedArr[index] = 'Selected'

        this.setState({
            radioArr:NewRadioArr,
            value:valueArr,
            SelectedClass:SelectedArr
        })
    }

    postRisk(){
        let Data = $("#form1").serialize()
        let _this = this
        axios({
            method:"POST",
            url:"/GetRiskRatingResult",
            data:Data,
            withCredentials:true
        }).then(function(response){
            if(response.data.Success){
                Modal.alert(
                    response.data.Data[0],
                    response.data.Data[1],
                    [
                        { text: '重新评估', onPress: () => _this.init()},
                        { text: '确定', onPress: () => console.log('ok') }
                    ]
                )
            }else{
                Modal.alert(
                    "评估失败",
                    response.data.Msg,
                    [
                        { text: '重新评估', onPress: () => _this.init()},
                        { text: '确定', onPress: () => console.log('ok') }
                    ]
                )
            }
        })
    }

    render() {
        const LeftArr=[]

        for(let i=0;i<this.state.QuestionNo;i++){
            LeftArr.push(this.state.titleArr[i])
        }

        const LeftCoversationArr=LeftArr.map((item,index)=>{
            return(
                <div key={index}>
                    <LeftConversation title={item}/>
                    <RightConversation title={this.state.radioArr[index].msg}/>
                </div>

            )
        })

        const BottomConversationArr = this.state.BottomArr.map((item,index)=>{
            let NameOrder = "["+index+"].Order"
            let NameSelected = "["+index+"].Selected"
            let RadioIndex = index+1
            let NameRadio = "myradio"+RadioIndex 
            return(
                <div key={index} className={item._class}>
                    <input type="hidden" name={NameOrder} value={index+1}/>
                    <input type="hidden" name={NameSelected} value={this.state.value[index]} id="Selected1"/>
                    <input style={{display:"none"}} type="radio" name={NameRadio} value={this.state.value[index]}/>
                    <BottomConversation data={item.data} changeBottom={this.changeBottom.bind(this)} _class={this.state.SelectedClass}/>
                </div>
            )
        })


        return (
            <div className="MyRisk" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title='问卷调查' BackTO='/'/>
                {/* <BottomTab/> */}
                <form id="form1"  action='/GetRiskRatingResult' method='post'>
                    {LeftCoversationArr}
                    {BottomConversationArr}
                    {this.state.QuestionNo === 10 &&this.state.value[this.state.QuestionNo-1]!==""?
                        <div className="SubmitAdd" onClick={this.postRisk.bind(this)}>提交</div>
                    :
                        <div className="Add" onClick={this.AddQuestionNo.bind(this)}>下一题</div>
                    }
                    
                </form>

            </div>
        );
    }
}

export default MyRisk;