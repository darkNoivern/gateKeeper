import React, { useState } from 'react'
import '../styles/quiz.css'
import questions from '../data/questions'
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Explanation = (props) => {
    const [ansDisplay, setAnsDisplay] = useState(false);

    const toggle = () => {
        setAnsDisplay((preState) => {
            return !preState;
        });
    };

    return (
        <>
            <div className="explanation-palette text-white p-3">
                <div className="explanation-explanation d-flex justify-content-between align-items-center">
                    Explanation
                    {
                        <IconButton onClick={toggle} className='text-white'>
                            {ansDisplay === false ? <AddIcon /> : <RemoveIcon />}
                        </IconButton>
                    }
                </div>
                {ansDisplay === true ?
                    (<div className="answer-part ps-3">
                        {questions[props.id].explanation}
                    </div>) :
                    (<div className="answer-part ps-3" style={{ display: "none" }}>
                        {questions[props.id].explanation}
                    </div>)
                }
            </div>
        </>
    )
}

export default Explanation
