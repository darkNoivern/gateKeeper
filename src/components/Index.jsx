import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import Welcome from './Welcome'
import Leaderboard from './Leaderboard'
import Problems from './Problems'
import Chat from './Chat'
import SignUp from './SignUp';
import SignIn from './SignIn';
import Quiz from './Quiz'
import Error from './Error';
import { useSelector } from 'react-redux';

const Index = () => {
    const substituteData = useSelector(state => state);
    const [user, setUser] = useState(substituteData.currentUser !== (-1))

    const toggleUser = (set) => {
        setUser(set)
    }

    return (
        <>
            <Router>
                <div className="background-glass">
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover={false}
                    />
                    <div className="row mx-0">
                        <div className="col col-3 px-0"><Sidebar user={user} toggleUser={toggleUser} /></div>
                        <div className="col col-9 p-5">
                            <Routes>
                                <Route exact path='/' element={<Welcome />} />
                                <Route exact path='/chat' element={user === true ? <Chat /> : <SignIn toggleUser={toggleUser} />} />
                                <Route exact path='/ranking' element={<Leaderboard />} />
                                <Route exact path='/problems' element={user === true ? <Problems /> : <SignIn toggleUser={toggleUser} />} />
                                <Route exact path='/question/:id' element={user === true ? <Quiz /> : <SignIn toggleUser={toggleUser} />} />
                                <Route exact path='/signup' element={<SignUp toggleUser={toggleUser} />} />
                                <Route exact path='/signin' element={<SignIn toggleUser={toggleUser} />} />
                                <Route path= '*' element={<Error />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Index
