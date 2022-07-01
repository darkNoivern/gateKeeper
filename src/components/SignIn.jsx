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
    const [id, setId] = useState(-1);

    const getUserName = (event) =>{
        setUserName(event.target.value);
    }
    const getPassword = (event) =>{
        setPassword(event.target.value);
    }

    const signInFunc = () => {

        console.log(username, password)

        if (!username || !password) {
            return toast.warn('Please fill all details', { theme: "colored" })
        }

        const checkUserNamePresent = userDetails.find((user) => {
            return (user.username === username);
        })

        let same = false;
        userDetails.forEach((user)=>{
            if(user.username === username){
                if(user.password === password){
                    same = true;
                }
            }
        })

        if (checkUserNamePresent === undefined) {
            return toast.error("Username dosen't exists", { theme: "colored" });
        }

        if(same === false){
            setUserName('');
            setPassword('');
            return toast.error('Username/Password is in-correct', { theme: "colored" });
        
        }

        dispatch({
            type: 'SIGN_IN',
            payload: username,
        });
        
        props.toggleUser(true)
        toast.success('Logged In succesfully', { theme: "colored" })
        navigate('/')
        
    }

    return (
        <>
            <div className="banner pb-3">
                SignIn
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
                        
                    </form>
                    <div className="flexy mt-5 mb-3">
                        <button
                            className="ui text-white button sign-btn mouse-rat"
                            onClick={signInFunc}
                        >Sign-In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
