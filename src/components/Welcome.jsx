import React from 'react'
import welcomeData from '../data/welcomeData'
import '../styles/welcome.css'

const Welcome = () => {
    return (
        <>
            <div className="banner pb-3">
                Welcome
            </div>
            <div className="scrollY section-height text-default">
                <ol>
                    {
                        welcomeData.map((dataPoints, index) => {
                            return (
                                <>
                                    <li className='welcome-points mb-2'>
                                        {dataPoints}
                                    </li>
                                </>
                            )
                        })
                    }
                </ol>
            </div>
        </>
    )
}

export default Welcome
