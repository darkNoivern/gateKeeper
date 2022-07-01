import React from 'react'
import '../styles/sidebar.css'
import { Link } from 'react-router-dom'
import gengar from '../images/gengar.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Sidebar = (props) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        props.toggleUser(false)
        dispatch({
            type: 'LOGOUT',
        });
        navigate('/')
    }
    return (
        <>
            <div className="sidebar-glass ps-5 py-5">
                <div className="web-face mb-5 ps-2">
                    <div className="py-3 mb-3">
                        <img src={gengar} alt="" className='user-profile-img' />
                    </div>
                    <div className='company-name mb-2 shalimar text-dark'>
                        Gate Keeper
                    </div>
                </div>
                <div className="nav-section">
                    <div className='mt-4 section-links d-flex align-items-center'>
                        <Link exact to='/' className='sidebar-link-text'>
                            <i className="fas fa-hashtag section-font-icon mx-2"></i>Welcome
                        </Link>
                    </div>
                    <div className='mt-4 section-links d-flex align-items-center'>
                        <Link exact to='/chat' className='sidebar-link-text'>
                            <i className="fas fa-comment-dots section-font-icon mx-2"></i>Chats
                        </Link>
                    </div>
                    <div className='mt-4 section-links d-flex align-items-center'>
                        <Link exact to='/problems' className='sidebar-link-text'>
                            <i className="fas fa-question-circle section-font-icon mx-2"></i>Problems
                        </Link>
                    </div>
                    <div className='mt-4 section-links d-flex align-items-center'>
                        <Link exact to='/ranking' className='sidebar-link-text'>
                            <i className="fas fa-chess-queen section-font-icon mx-2"></i>Leaderboard
                        </Link>
                    </div>
                    <div className="my-4 space-div"></div>
                    {/* <div className="my-5"></div> */}
                    {
                        props.user === false ?

                            <>
                                <div className='mt-4 section-links d-flex align-items-center'>
                                    <Link exact to='/signup' className='sidebar-link-text'>
                                        <i className="fas fa-sign-in-alt section-font-icon mx-2"></i>
                                        SignUp
                                    </Link>
                                </div>
                                <div className='mt-4 section-links d-flex align-items-center'>
                                    <Link exact to='/signin' className='sidebar-link-text'>
                                        <i className="fas fa-sign-in-alt section-font-icon mx-2"></i>
                                        SignIn
                                    </Link>
                                </div>
                            </>
                            :
                            <div  className='mt-4 section-links d-flex align-items-center sidebar-link-text'>
                            <div onClick={logOut} className='sidebar-link-text'>
                                <i className="fas fa-sign-out-alt section-font-icon mx-2"></i>Logout
                            </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar
