import {combineReducers} from 'redux';
import chatReducer from './chat_reducer'; 
//create rootReducer = comineReducers(); 
const rootReducer = combineReducers({
  chat: chatReducer
}); 
export default rootReducer; 