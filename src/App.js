import React, {useState, useEffect} from 'react'
import ChatScreen from './Component/ChatScreen'
import './App.css';

function App() {
  const [identifiedUser, setIdentifiedUser] = useState(false);
  const [myName, setMyName] = useState('')
  let arrChatLog = window.localStorage.getItem('chatLog').split(' AND ').map(el => JSON.parse(el));
  let [chatLog, setChatLog] = useState(arrChatLog)
  useEffect(() => {
    
  }, [chatLog]);
  
  function handlePrevChat(chatLog) {
    console.log(chatLog)
    setChatLog(chatLog)
    chatLog = chatLog.map(el => JSON.stringify(el))
    chatLog = chatLog.join(' AND ')
    window.localStorage.setItem('chatLog', chatLog)
  }
  function submitHandler() {
    
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
    // else {alert('user already exists, please choose another one'); return;}
    window.localStorage.setItem('userList', users)
      setIdentifiedUser(true)
      chatLog = window.localStorage.getItem('chatLog');
      chatLog = chatLog.split(' AND ')
      chatLog = chatLog.map(el => JSON.parse(el))
      console.log(chatLog)
  }
  function nameChangeHandler(event) {
    setMyName(event.target.value.trim())
  }
  return (
    <div className="App justify-center flex">
      <div className='flex bg-white justify-center border-2 border-solid border-purple shadow overflow-hidden sm:rounded-lg'>
        {identifiedUser &&
          <ChatScreen myName={myName} handlePrevChat={handlePrevChat} chatLog={chatLog}> </ChatScreen>
        }
        {!identifiedUser &&
          <form className='block m-[20px] h-[70px]'>

            <label htmlFor="userName" className='inline-block mr-[10px] h-[30px]'>Please enter your name</label>
            <input onChange={nameChangeHandler} className='inline-block border-2 h-[30px] rounded-sm  border-solid border-purple' id="userName" type="text"></input>

            
            <button className='block rounded-sm w-[100px] bg-purple text-white' onClick={submitHandler}>Join Chat</button>

          </form>
        }
      </div>
    </div>
  );
}

export default App;
