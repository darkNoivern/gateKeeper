import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '../styles/signup.css'

const SignUp = (props) => {
    
    const dispatch = useDispatch();
    const substituteData = useSelector(state=>state);
    const userDetails = substituteData.userDetails;
    const navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassWord, setRePassword] = useState('');

    const getUserName = (event) =>{
        setUserName(event.target.value);
    }
    const getPassword = (event) =>{
        setPassword(event.target.value);
    }
    const getRePassword = (event) =>{
        setRePassword(event.target.value);
    }
    
    const signUpFunc = () => {

        const checkUserNamePresent = userDetails.find((user) => {
            return (user.username === username);
        })

        if (!username || !password || !rePassWord) {
            return toast.warn('Please fill all details', { theme: "colored" })
        }

        if (checkUserNamePresent !== undefined) {
            return toast.error('Username already exists', { theme: "colored" });
        }

        if(password!==rePassWord){
            return toast.error("Passwords didn't match", { theme: "colored" });
        }

        const newObj = {
            username: username,
            password: password,
        }
    
        dispatch({
            type: 'SIGN_UP',
            payload: newObj,
        });

        props.toggleUser(true)
        toast.success('User added succesfully', { theme: "colored" })
        navigate('/')
    }

    return (
        <>
            <div className="banner pb-3">
                SignUp
            </div>

            <div className="flexy section-height">
                <div className="signUp-box p-4">
                    <form action="" className="mt-5">
                        <label htmlFor="" className="form-label">UserName</label>
                        <input
                            type="text"
                            className="form-control mb-4"
                            placeholder="Enter the Username....."
                            onChange={getUserName}
                        />
                        <label htmlFor="" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control mb-4"
                            placeholder="Enter the Password....."
                            onChange={getPassword}
                        />
                        <label htmlFor="" className="form-label">Re-Enter Password</label>
                        <input
                            type="password"
                            className="form-control mb-4"
                            placeholder="Re-Enter the Password....."
                            onChange={getRePassword}
                        />
                    </form>
                    <div className="flexy mt-4 mb-3">
                        <button
                            className="ui text-white button sign-btn mouse-rat"
                            onClick={signUpFunc}
                        >Sign-Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
