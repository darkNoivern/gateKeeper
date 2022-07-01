import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../styles/leaderboard.css'

const Leaderboard = () => {

    const substituteData = useSelector(state=>state)
    const [displayBoard, setDisplayBoard] = useState([]);
    const userDetails = substituteData.userDetails;
    const leaderBoard = [...Array(userDetails.length)];
    // const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(leaderBoard)  
        leaderBoard.forEach((user,index)=>{
            let count = 0
            userDetails[index].questionDetails.forEach((question,index)=>{
                if(question.verdict==='correct'){
                    console.log('correct')
                    // setCount((preState)=>{
                    //     return (preState+1);
                    // })
                    count++
                }
            })
            let newOBJ = {
                count: count,
                username: userDetails[index].username,
            }
            console.log('mm',newOBJ.count)
            leaderBoard[index] = newOBJ
            // setCount(0);
        })
        console.log(leaderBoard)
        leaderBoard.sort(function(a, b){return b.count-a.count});
        console.log(leaderBoard)
        setDisplayBoard(leaderBoard)
    },[])
        
    return (
        <>
            <div className="banner pb-3">
                LeaderBoard
            </div>  
            <div className="scrollY section-height">
                <table className="table text-default text-center">
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            console.log(displayBoard)}{
                            displayBoard.map((user,index)=>{
                                return(

                                <tr>
                                    <td>{user?.username}</td>
                                    <td>{user?.count}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Leaderboard
