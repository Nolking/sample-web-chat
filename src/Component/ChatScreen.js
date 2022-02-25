import React, {useState, useEffect} from "react";
import ChatHistory from "./ChatHistory";
export default function ChatScreen(props) {
    const [prevChat, setPrevChat] = useState(props.chatLog)
    const [curMess, setCurMess] = useState('')
    let arr = []

    const handleStorage = (event) => {
        console.log(event);
        if (event.key === 'chatLog') setPrevChat(event.newValue.split(' AND ').map(el => JSON.parse(el)));
      }
      window.addEventListener('storage', handleStorage);
    useEffect(() => {
        console.log(prevChat)
        window.localStorage.setItem('chatLog', prevChat.map(el => JSON.stringify(el)).join(' AND '));
        if (window.localStorage.getItem('chatLog') === '') setPrevChat([{userName: props.myName, chat: []}]); 
      }, [prevChat]);
      
    function messageHandler(event) {
        setCurMess(event.target.value)
    }
    function sendMesage() {
        if (window.localStorage.getItem('chatLog').includes(' AND '))  arr = window.localStorage.getItem('chatLog').split(' AND ').map(el => JSON.parse(el));
        else if (window.localStorage.getItem('chatLog') !== '') {arr = [JSON.parse(window.localStorage.getItem('chatLog'))] }
        if (arr.length> 0) {
            
            let lastChat = arr[arr.length - 1];
            if (lastChat.userName === props.myName) {
                // arr[arr.length - 1].chat.push(curMess)
                lastChat = {userName: props.myName, chat: [...lastChat.chat, curMess]}
                arr.splice(arr.length-1, 1, lastChat)
                setPrevChat(arr)
            }
            else { 
                let myMess = {}
                myMess.userName = props.myName;
                myMess.chat = []
                myMess.chat.push(curMess);
                arr.push(myMess)
                console.log(arr)
                setPrevChat(arr)
            }
        } else {
            setPrevChat([{userName: props.myName, chat: curMess}]); 
        }
    }
    return (
        <div  className="text-3xl relative block w-[400px] ">
            <div className="chat-header w-[100%] h-[40px] font-bold text-white text-base leading-[40px] pl-[10px] flex absolute top-0 bg-purple">
                You can chat here !! Let's talk 
            </div>
            <ChatHistory myName={props.myName} chatLog={prevChat}></ChatHistory>
            <div className="chat-footer w-[100%] h-[40px] flex absolute bottom-0 bg-purple">
                <input onChange={messageHandler} className="inline-block h-[40px] pl-[10px] text-purple ml-[10px] text-sm w-[70%] border-2 h-[30px] rounded-sm  border-solid border-purple"></input>
                <button onClick={sendMesage}  className="inline-block ml-[10px] text-white font-bold h-[40px] rounded-sm  ">Send</button>
            </div>
        </div>
    )
}