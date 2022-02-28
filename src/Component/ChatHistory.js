import React from "react";
import ChatMessage from "./ChatMessage";
export default function ChatHistory(props) {
    if (props.chatLog.length === 1  && props.chatLog[0].chat.length === 0 ) {
        return (
            <div className="chat-history pt-[10px] pr-[10px] bg-[white] overflow-auto"></div>
        )
    }
    else 
        return (
            <div className="chat-history pt-[10px] pr-[10px] bg-[white] overflow-auto">
                {props.chatLog.length >0 && props.chatLog.map((mess, idx) => (
                    <ChatMessage key={idx} myName={props.myName} userName={mess.userName} chat={mess.chat}>
                    </ChatMessage>
                )
                )}
            </div>
        )
    
}