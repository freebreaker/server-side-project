
import axios from 'axios'
import fetch from 'isomorphic-fetch';
import { Modal} from 'antd-mobile';
import loginReducer from '../reducers/login';
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOG_OUT = "LOG_OUT"
export const SIGN_IN = "SIGN_IN"
export const LOGIN_STORE_IN = "LOGIN_STORE_IN"
export const FETCH_LOGIN = "FETCH_LOGIN"

export const loginStore =() =>({          //登陆账号密码的缓存
  type:LOGIN_STORE_IN,
  payload:true
})


export function fetchList() {        //进入首页后服务端渲染接口
  return (dispatch) => {
    console.log('dispatch')
    return axios({
            method:"POST",
            url:"/Api/GetProjectBList",
            data:{
              "pn":0
            },
            withCredentials:true
          })
        .then(res => res.json())
        .then(json => dispatch({ type: 'FETCH_LIST_SUCCESS', payload: json.Data}));
  }
}

export const fetchBefore = () =>({   //登录之前将iflogin 消息录入
  type:'FETCH_BEFORE'
})


export const fetchStart = () => ({     //登陆开始显示登陆中
  type: 'FETCH_START'
})

export const fetchSuccess =(result) => ({  //登陆成功
  type:'LOGIN_SUCCESS',
  result
})


export function loginTest(loginMsgs,e){
       //登陆
    e.preventDefault(); 
    return (dispatch) =>{
      dispatch(fetchStart())
      return axios({
        method:"POST",
        url:"/DoLogIn",
        data:loginMsgs,
        withCredentials:true
      })
      .then(res => {
        if(res.data.Success){
          dispatch(fetchSuccess(res.data))
          dispatch(loginStore())
        }else{
          alert(res.data.Msg)
        }
      });
    }
}

export const logOut =() => {
  axios.post('/LogOut')    //登出
  return {
    type:LOG_OUT
  }
}
  

export const fetchLogIn = (result) =>({  //签到
  type:FETCH_LOGIN,
  payload:result
})

export function signIn(){ 
  // 发送签到请求
  return (dispatch)=>{
    return axios({
      method:"POST",
      url:"/SignIn",
      withCredentials:true
    })
    .then(function (response) {
        dispatch(fetchLogIn(response.data))
        response.data.Success?Modal.alert(
           '签到成功！',
           response.data.Msg,
           [
            { text: '确定', onPress: () => console.log('ok') },
           ]
        ):Modal.alert(
          '签到成功！',
          response.data.Msg,
          [
            { text: '确定', onPress: () => console.log('ok') },
          ]
       )
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export function getBorrowList(id){   //获取借款列表页
  return (dispatch)=>{
    return axios({
      method:"POST",
      url:"Api/GetMyProjectBDetail/"+id,
      withCredentials:true      
    })
    .then(function (response) {
        console.log(response);
        dispatch(fetchBorrowList(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
export const fetchBorrowList =(result) => ({   //获取借款列表页action
  type:'BORROWLIST_SUCCESS',
  payload:result
})

export const changeSelectedValue = (value)=> {   //改变tab-number
  return {
  type:"CHANGE_SELECTED_VALUE",
  payload:value
}}


export const MyAssetList = (value) =>{           
  //投资总额 已收利息 待收利息 待收本金 充值金额 提现金额
  return {
    type:"GET_MYASSETLIST",
    payload:value
  }
}

export const getMyAssetList = () =>{
  return (dispatch)=>{
    return axios({
      method:"POST",
      url:"/GetMyAssetList",
      withCredentials:true
    })
    .then(function (response) {
        dispatch(MyAssetList(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export const CanUseMoney = (value) =>{
  return {
    type:"Can_Use_Money",
    payload:value
  }
}

export const getCanUseMoney =()=>{
  return (dispatch)=>{
    return axios({
      method:"POST",
      url:"/RefreshUserModel",
      withCredentials:true
    })
    .then(function (response) {
        dispatch(CanUseMoney(response.data.Data.Money))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export const ProjectBDt =(value) =>{
  return {
    type:"PROJECTBDT",
    payload:value
  }
}

export const getProjectBDt =(Id)=>{
  return (dispatch)=>{
    return axios({
      method:"POST",
      url:"/Api/GetProjectBDt/d9ed4a8c-56a1-4b85-98d3-0dd632befe72",
      withCredentials:true
    })
    .then(function (response) {
        dispatch(ProjectBDt(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}