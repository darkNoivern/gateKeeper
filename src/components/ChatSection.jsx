import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/chat.css'

const ChatSection = (props) => {
    const substituteData = useSelector(state => state);
    const chatData = substituteData.chatData;
    const currentUserId = substituteData.currentUser;
    const currentUser = substituteData.userDetails[currentUserId].username

    return (

        currentUser !== props.chat.chatUser ?
            <>
                <div className='d-flex justify-content-start mb-2'>
                    <div className="chat-design other p-2">
                        <div className="writerUser">{props.chat.chatUser}</div>
                        <div className="chatText text-darkux">{props.chat.chatText}</div>
                        <div className="chatTime d-flex justify-content-between">
                            <span className='pt-1 pe-2 span-height'>{props.chat.chatTime}</span>
                            <span className='pt-1'>{props.chat.chatDate}</span>
                        </div>
                    </div>
                </div>
            </>
            :
            <>
                <div className='d-flex justify-content-end mb-2'>
                    <div className="chat-design self text-default p-2">
                        <div className="writerUser d-flex justify-content-end">{props.chat.chatUser}</div>
                        <div className="chatText">{props.chat.chatText}</div>
                        <div className="chatTime d-flex justify-content-between">
                            <span className='pe-2 pt-1'>{props.chat.chatTime}</span>
                            <span className='pt-1'>{props.chat.chatDate}</span>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default ChatSection
