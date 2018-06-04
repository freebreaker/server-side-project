
export default function loginReducer(state={}, action) {
    switch(action.type) {
      case 'FETCH_START':
        return {isFetching:true,FetchSuccess:false}
      case 'LOGIN_SUCCESS':
        return Object.assign({},state,{FetchSuccess:true,Data:action.result.Data})
      case 'LOG_OUT':
        return Object.assign({},state,{isFetching:false,FetchSuccess:false})
      case 'SIGN_IN':
        return Object.assign({},state,{ifSigned:true})
    default: return state;
    }
  } 