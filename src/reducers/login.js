
export default function loginReducer(state={}, action) {
    switch(action.type) {
      case 'FETCH_BEFORE':
        return Object.assign({},state,{
          isFetching:false,
          FetchSuccess:false,
          ifSigned:{
            Data:null,
            Msgs:"未签到",
            Success:true
          }
        })
      case 'FETCH_START':
        return Object.assign({},state,{isFetching:true,FetchSuccess:false})
      case 'LOGIN_SUCCESS':
        return Object.assign({},state,{FetchSuccess:true,Data:action.result.Data})
      case 'LOG_OUT':
        return Object.assign({},state,{isFetching:false,FetchSuccess:false})
      case 'FETCH_LOGIN':
        return Object.assign({},state,{ifSigned:action.payload})
      case 'GET_MYASSETLIST':
        return Object.assign({},state,{AssestList:action.payload})
      case 'Can_Use_Money':
        return Object.assign({},state,{CanUseMoney:action.payload})
      case 'PROJECTBDT':
        return Object.assign({},state,{ProjectBDt:action.payload})
    default: return state;
    }
  } 