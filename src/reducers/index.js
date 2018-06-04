import { combineReducers } from 'redux';
import listReducer from './list';
import investReducer from "./invest";
import loginReducer from './login';
import borrowListReducer from "./borrowlist"
import changeSelectedReducer from "./changeSelected"

const rootReducer = combineReducers({
  Data:listReducer,
  IfLogIn:loginReducer,
  MyBorrowList:borrowListReducer,
  selectedValue:changeSelectedReducer
})
export default rootReducer


