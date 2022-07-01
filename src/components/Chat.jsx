import React, { useState } from 'react'
import '../styles/chat.css'
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux';
import ChatSection from './ChatSection';

const SendButton = styled(IconButton)({
    color: 'rgba(255,255,255,0.4)',
    border: '1px solid rgba(255,255,255,0.4)',
});

const Chat = () => {

    const dispatch = useDispatch();
    const [typeText, setTypeText] = useState('');
    const substituteData = useSelector(state => state)
    const chatData = substituteData.chatData
    const userId = substituteData.currentUser;
    const username = substituteData.userDetails[userId].username

    const getTypeText = (event) => {
        setTypeText(event.target.value)
    }

    const addToChat = () => {
        if (typeText === '') {
            return toast.warn('LOL!! 🤣 write something first', { theme: "colored" })
        }

        let obj = {
            text: typeText,
            user: username,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
        }

        dispatch({
            type: 'CHAT',
            payload: obj,
        });
        setTypeText('')
    }

    return (
        <>
            <div className="banner pb-3">
                Chat Section
            </div>

            <div className="section-height">
                <div className="chatSection scrollY mb-1 pe-2">
                    {
                        chatData.map((chat) => {
                            return (
                                <ChatSection chat={chat} />    
                            )
                        })
                    }
                </div>
                <div className="typeSection d-flex justify-content-between">
                    <input
                        value={typeText}
                        onChange={getTypeText}
                        placeholder='Type something ... '
                        type="text"
                        className='form-control' />
                    <SendButton
                        onClick={addToChat}
                        className='ms-4'>
                        <SendIcon />
                    </SendButton>
                </div>
            </div>
        </>
    )

}

export default Chat
