import React from 'react'
import '../styles/problems.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import questions from '../data/questions'

const Problems = () => {
    const navigate = useNavigate();
    const substituteData = useSelector(state=>state);
    const answerScript = substituteData.userDetails[substituteData.currentUser].questionDetails;
    return (
        <>
            <div className="banner pb-3">
                Questions
            </div>

            <div className="flexy scrollY">
                <div className="custom-width section-height">
                    <div className="row mx-0">
                        {
                            answerScript.map((verdict, index) => {
                                return (
                                    <>
                                        <div className="col col-1 mb-3 px-0 flexy">
                                            <div
                                                onClick={() => { navigate(`/question/${index + 1}`) }}
                                                className="options row mx-0 text-center">
                                                <div className="col col-12 px-0">{index + 1}</div>
                                                {
                                                    (verdict.verdict==='correct') ?
                                                    <div className="col col-12 px-0 text-success bg-success">ans</div>
                                                    : 
                                                    (verdict.verdict==='wrong') ?
                                                    <div className="col col-12 px-0 text-danger bg-danger">ans</div>
                                                    :
                                                    <div className="col col-12 px-0 text-secondary bg-secondary">ans</div>    
                                                }
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Problems
