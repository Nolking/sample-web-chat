import React from 'react';

export default function ChatMessage(props) {

    if (props.userName === props.myName)
        return (
            <div className='my-message'>
                <div className='block w-[100%] h-[40px] relative'>
                <p className='avatar text-center break-all absolute right-[0px] rounded-[50px] border-[1px] text-base leading-[40px] w-[40px] h-[40px] bg-purple text-white'>{props.userName[0].toUpperCase()}</p>
                </div>
                {props.chat.map((el, idx) =>(<p key={idx} className='message ml-[10px] h-[30px] leading-[30px] pr-[15px] mr-[40px] text-right text-sm rounded-sm mb-[5px] bg-purple text-white pl-[5px]'>{el}</p>))}
            </div>
        )
    else return (
        <div className='other-message ml-[10px]'>
            <p className='avatar text-center break-all rounded-[50px] border-[1px] text-base leading-[40px] w-[40px] h-[40px] bg-gray text-white'>{props.userName[0].toUpperCase()}</p>
            {props.chat.map((el, idx) =>(<p key={idx} className='message ml-[40px] h-[30px] leading-[30px] text-left text-sm rounded-sm mb-[5px] bg-gray text-white pl-[15px]'>{el}</p>))}
        </div>
    )
}