import React from 'react';

export default function ChatMessage(props) {

    if (props.userName === props.myName)
        return (
            <div className='my-message'>
                <div className='block w-[100%] h-[40px] relative'>
                <p className='text-center absolute right-[0px] rounded-[50px] border-[1px] text-sm leading-[40px] w-[40px] h-[40px] bg-purple text-white'>{props.userName[0]}</p>
                </div>
                {props.chat.map((el) =>(<p className='ml-[10px] pr-[10px] mr-[40px] text-right text-sm rounded-sm mb-[5px] bg-purple text-white pl-[5px]'>{el}</p>))}
            </div>
        )
    else return (
        <div className='other-message ml-[10px]'>
            <p className='text-center rounded-[50px] border-[1px] text-sm leading-[40px] w-[40px] h-[40px] bg-gray text-white'>{props.userName[0]}</p>
            {props.chat.map((el) =>(<p className='ml-[40px] text-left text-sm rounded-sm mb-[5px] bg-gray text-white pl-[5px]'>{el}</p>))}
        </div>
    )
}