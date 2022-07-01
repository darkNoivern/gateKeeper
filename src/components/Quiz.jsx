import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/quiz.css'
import Unattempted from './Unattempted'
import Attempted from './Attempted'
import Explanation from './Explanation'
import { useSelector } from 'react-redux'
import questions from '../data/questions'
import { IconButton } from '@mui/material'
import { styled } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'

const NextPrevButton = styled(IconButton)({
    color: '#2A0944',
    border: '1px solid #2A0944',
});

const Quiz = () => {
    const substituteData = useSelector(state => state);
    const userId = substituteData.currentUser;
    const { id } = useParams();
    const [ questionId, setQuestionId ] = useState(parseInt(id) - 1)
    const navigate = useNavigate();
    const [done, setDone] = useState(false)

    useEffect(()=>{
        const dummyDone = ((questionId+1) <= questions.length) ? (substituteData.userDetails[userId].questionDetails[questionId].answer !== 'unanswered') : true;
        setDone(dummyDone);
        console.log('id',typeof(questionId))
        console.log('q',questions.length)
    },[questionId])

    const toggleDone = () => {
        setDone(true);
    }
    return (
        <>
            <div className="banner pb-3 sidebar-text-green d-flex justify-content-between">
                <div className='abril'>
                Question {questionId+1}
                </div>
                <div>
                    {id>1 ? 
                    <NextPrevButton 
                    onClick={()=>{
                        navigate(`/question/${questionId+1-1}`)
                        setQuestionId(questionId-1)}
                        }
                    className='me-5'>
                        <ArrowBackIcon />
                    </NextPrevButton>
                    :
                    <></>
                    }
                    <NextPrevButton
                    onClick={()=>{
                        navigate(`/question/${questionId+1+1}`)
                        setQuestionId(questionId+1)}
                        }>
                        <ArrowForwardIcon />
                    </NextPrevButton>
                </div>
            </div>
            {
                ((questionId+1) <= questions.length) ?
                    <>
                        <div className="section-height pt-4">
                            <div>
                                {
                                    done === false ? <Unattempted id={questionId} toggleDone={toggleDone} /> : <Attempted id={questionId} />
                                }
                            </div>
                            {
                                done === false ?
                                    <div className='mt-5' style={{ display: "none" }}>
                                        <Explanation id={questionId} />
                                    </div> :
                                    <div className='mt-5'>
                                        <Explanation id={questionId} />
                                    </div>
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className="section-height flexy pt-4 text-default not-prepared">
                            This question is still not prepared
                        </div>
                    </>
                }
            </>
    )
}

export default Quiz
