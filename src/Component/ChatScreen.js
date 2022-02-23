import React, {useState, useEffect} from "react";
import ChatHistory from "./ChatHistory";
export default function ChatScreen(props) {
    const [prevChat, setPrevChat] = useState(props.chatLog)
    const [curMess, setCurMess] = useState('')
    useEffect(() => {
        // Update the document title using the browser API
        
      }, [prevChat]);
    function messageHandler(event) {
        setCurMess(event.target.value)
    }
    function sendMesage() {
        let arr = window.localStorage.getItem('chatLog').split(' AND ').map(el => JSON.parse(el));
        let myMess = {}
        myMess.userName = props.myName;
        let lastChat = prevChat[prevChat.length - 1];
        if (lastChat.userName === props.myName) {
            prevChat[prevChat.length - 1].chat.push(curMess)
        }
        else { myMess.chat = []
            myMess.chat.push(curMess);
            arr.push(myMess)
            setPrevChat(arr)
        }
        console.log(prevChat)
        props.handlePrevChat(prevChat)
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