// import type.js
import types from './types';
//input db from firebase; 
import db from "../firebase"; 

export function updateChat(log){
  return {
    type: types.UPDATE_CHAT_LOG,
    payload: log
  }

}

export function updateInput(name, value){
  return {
    type: types.UPDATE_INPUT, 
    payload: {name, value}
  }
}

export function sendMessageToDb(message){
  db.ref('/chat-long').push({
    name: 'Stu',
    message
  }); 
  return {
    type: types.SEND_MESSAGE
  }
}