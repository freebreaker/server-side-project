
import axios from 'axios'
import fetch from 'isomorphic-fetch';
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
    return fetch('http://localhost:3002/GetProjectBListThree')
        .then(res => res.json())
        .then(json => dispatch({ type: 'FETCH_LIST_SUCCESS', payload: json.Data }));
  }
}

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
      return axios.post('http://localhost:13244/DoLogin',loginMsgs)
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

export const logOut =() => ({  //登出
  type:LOG_OUT
})

export const fetchLogIn = (result) =>({  //签到
  type:FETCH_LOGIN,
  payload:result
})

export function signIn(){  // 发送签到请求
  return (dispatch)=>{
    return axios({
      method:"POST",
      url:"http://localhost:13244/SignIn",
      withCredentials:true
    })
    .then(function (response) {
        dispatch(fetchLogIn(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export function getBorrowList(){   //获取借款列表页
  return (dispatch)=>{
    return axios.post("/Report/projectBLog")
    .then(function (response) {
        console.log(response);
        dispatch(fetchBorrowList(response.data.Data))
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