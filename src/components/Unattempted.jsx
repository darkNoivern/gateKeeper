import React,{ useState } from 'react'
import '../styles/quiz.css'
import questions from '../data/questions'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const Unattempted = (props) => {
    const dispatch = useDispatch();
    const [optionSelected, setOptionSelected] = useState(-1);

    const submitSolution = (event) => {
        // event.preventDefault();
        if(optionSelected===(-1)){
            return toast.warn('Please select an option', { theme: "colored" })
        }

        console.log(optionSelected)
        
        const newObj = {
            questionId: props.id,
            optionSelected: optionSelected,
            verdict: (optionSelected===questions[props.id].answer ? 'correct' : 'wrong')
        }

        props.toggleDone();
    
        dispatch({
            type: 'ANSWER',
            payload: newObj,
        });
        
    }

    return (
        <>
            <div className="question-palette p-4 text-white">
                <div className="question-text">
                    Q : {questions[props.id].question}
                </div>
                <div className="option mt-3 ps-3">
                    <div className='mb-1'>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" onClick={()=>{setOptionSelected(0)}} name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <span className='options-attempted px-1 pb-1'>{questions[props.id].a}</span>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" onClick={()=>{setOptionSelected(1)}} name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <span className='options-attempted px-1 pb-1'>{questions[props.id].b}</span>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" onClick={()=>{setOptionSelected(2)}} name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <span className='options-attempted px-1 pb-1'>{questions[props.id].c}</span>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" onClick={()=>{setOptionSelected(3)}} name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <span className='options-attempted px-1 pb-1'>{questions[props.id].d}</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button
                    onClick={()=>{submitSolution()}} 
                    className="ui button mouse-rat text-white quiz-submit-button">
                        Submit
                    </button>
                </div>
            </div>

        </>
    )
}

export default Unattempted
