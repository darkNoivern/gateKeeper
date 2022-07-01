import React, { useEffect } from 'react'
import '../styles/quiz.css'
import questions from '../data/questions'
import { useSelector } from 'react-redux'

const Attempted = (props) => {
    const substituteData = useSelector(state=>state);
    const userId = substituteData.currentUser;
    const objAns = substituteData.userDetails[userId].questionDetails[props.id];
    const answerMarked = objAns.answer;
    const verdict = objAns.verdict;
    
    useEffect(()=>{
        if(verdict==='correct'){
            console.log(answerMarked)
            console.log(document.querySelectorAll('.options-attempted'))
            console.log(document.querySelectorAll('.form-check-inline'))
            document.querySelectorAll('.options-attempted')[answerMarked].classList.add('bg-success')
        }
        else{
            console.log(answerMarked)
            console.log(document.querySelectorAll('.options-attempted'))
            console.log(document.querySelectorAll('.form-check-inline'))
            document.querySelectorAll('.options-attempted')[answerMarked].classList.add('bg-danger');
            document.querySelectorAll('.options-attempted')[questions[props.id].answer].classList.add('bg-success');
        }
    },[])
    
    return (
        <>
            <div className="question-palette p-4 text-white">
                <div className="question-text">
                    Q : {questions[props.id].question}
                </div>
                <div className="option mt-3 ps-3">
                    <div className='mb-1'>
                        <div class="form-check form-check-inline">
                            <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <span className='options-attempted px-1 pb-1'>{questions[props.id].a}</span>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <div class="form-check form-check-inline">
                            <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <span className='options-attempted px-1 pb-1'>{questions[props.id].b}</span>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <div class="form-check form-check-inline">
                            <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <span className='options-attempted px-1 pb-1'>{questions[props.id].c}</span>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <div class="form-check form-check-inline">
                            <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <span className='options-attempted px-1 pb-1'>{questions[props.id].d}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attempted
