import React, {useState} from 'react'
import ChatScreen from './Component/ChatScreen'
import './App.css';

function App() {
  const [identifiedUser, setIdentifiedUser] = useState(false);
  const [myName, setMyName] = useState('')
  if (window.localStorage.getItem('chatLog') == null) window.localStorage.setItem('chatLog','') 
  let arrChatLog = []
  if (window.localStorage.getItem('chatLog').includes(' AND '))  arrChatLog = window.localStorage.getItem('chatLog').split(' AND ').map(el => JSON.parse(el));
  else if (window.localStorage.getItem('chatLog') !== '') {arrChatLog = [JSON.parse(window.localStorage.getItem('chatLog'))] }
  let [chatLog, setChatLog] = useState(arrChatLog)
  function handlePrevChat(chatLog) {
    setChatLog(chatLog)
  }
  function submitHandler() {
    if (myName === '') {alert('enter your name to join chat!!!'); return;}
    let users= window.localStorage.getItem('userList');
    if (users == null) {
      users = []
      users.push(myName);
      users.join('')
    }
    if (users !== null && !users.includes(myName)) {
      users = users.split('/');
      users.push(myName);
      users.join('/');
    } 
    window.localStorage.setItem('userList', users)
      setIdentifiedUser(true)
      if (window.localStorage.getItem('chatLog').includes(' AND ')) {
        setChatLog(window.localStorage.getItem('chatLog').split(' AND ').map(el => JSON.parse(el)))
      } else if (window.localStorage.getItem('chatLog') !== '') {
        setChatLog([JSON.parse(window.localStorage.getItem('chatLog'))])
      }
  } 
  function nameChangeHandler(event) {
    setMyName(event.target.value.trim())
  }
  return (
    <div className="App justify-center flex">
      <div className='flex bg-white justify-center border-2 border-solid border-purple shadow overflow-hidden sm:rounded-sm h-[600px]'>
        {identifiedUser &&
          <ChatScreen myName={myName} handlePrevChat={handlePrevChat} chatLog={chatLog}> </ChatScreen>
        }
        {!identifiedUser &&
          <form className='block m-[20px] h-[70px]'>
            <label htmlFor="userName" className='inline-block mr-[10px] h-[30px]'>Please enter your name</label>
            <input onChange={nameChangeHandler} className='inline-block pl-[10px] text-sm text-purple border-2 h-[30px] rounded-sm  border-solid border-purple' id="userName" type="text"></input>
            <button className='block h-[30px] rounded-sm w-[100px] bg-purple text-white' onClick={submitHandler}>Join Chat</button>
          </form>
        }
      </div>
    </div>
  );
}
export default App;
