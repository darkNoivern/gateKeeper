import React from 'react'
import '../styles/error.css'
import { useNavigate } from 'react-router-dom'
const Error = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="banner pb-3">
                Error 404
            </div>  
            <div className="section-height flexy">
                <div>
                <div className='error-text text-default mb-4'>
                    Pal 🥺 You are in wrong page
                </div>
                <div className='flexy'>
                    <button
                    onClick={()=>{navigate('/')}} 
                    className="ui button primary mouse-rat error-btn">
                        Go Back
                    </button>
                </div>
                </div>
            </div> 
        </>
    )
}

export default Error
