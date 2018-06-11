import {combineReducers} from 'redux';
import chatReducer from './chat_reducer'; 
import inputReducer from './input_reducer';
//create rootReducer = comineReducers(); 
const rootReducer = combineReducers({
  chat: chatReducer,
  input: inputReducer
}); 
export default rootReducer; 