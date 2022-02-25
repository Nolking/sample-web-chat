import React, {useState, useEffect} from "react";
import ChatMessage from "./ChatMessage";
export default function ChatHistory(props) {
    useEffect(() => {

    }, [props.chatLog]);
    if (props.chatLog.length === 1  && props.chatLog[0].chat.length === 0 ) {
        return (
            <div className="chat-history pt-[10px] pr-[10px] bg-[yellow] overflow-auto">

            </div>
        )
    }
    else 
        return (
            <div className="chat-history pt-[10px] pr-[10px] bg-[yellow] overflow-auto">
                {props.chatLog.length >0 && props.chatLog.map((mess, idx) => (
                    <ChatMessage key={idx} myName={props.myName} userName={mess.userName} chat={mess.chat}>
                    </ChatMessage>
                )
                )}
            </div>
        )
    
}