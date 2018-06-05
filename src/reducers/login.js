
export default function loginReducer(state={}, action) {
    switch(action.type) {
      case 'FETCH_START':
        return {isFetching:true,FetchSuccess:false}
      case 'LOGIN_SUCCESS':
        return Object.assign({},state,{FetchSuccess:true,Data:action.result.Data})
      case 'LOG_OUT':
        return Object.assign({},state,{isFetching:false,FetchSuccess:false})
      case 'FETCH_LOGIN':
        return Object.assign({},state,{ifSigned:action.payload})
    default: return state;
    }
  } 