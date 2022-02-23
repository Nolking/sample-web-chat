import React, {useState, useEffect} from "react";
import ChatMessage from "./ChatMessage";
export default function ChatHistory(props) {
    useEffect(() => {

    }, [props.chatLog]);
    return (
        <div className="chat-history pt-[10px] pr-[10px] bg-[yellow] overflow-auto">
            {props.chatLog.map((mess) => (
                <ChatMessage key={mess.userName} myName={props.myName} userName={mess.userName} chat={mess.chat}>
                </ChatMessage>
            )
            )}
        </div>
    )
}