import React from 'react'
import fampic from '../Images/fampic.jpg'
import budgetmain from '../Images/budget-main.png'

function MyWork() {
    return (
        <div className='my-work-wrapper'>
            <div className='my-work-container'>
                <div className='pic-maybe-container'>
                    <div className='pic-maybe'>
                        <div className='pic'>
                            <img className='fam-pic' src={fampic}/>
                        </div>
                        <div className='my-info'>Here's information about me and shit</div>
                    </div>
                </div>
                <div className='work-list-container'>
                    <div className='my-work'>
                        <div className='work-screenshot'>
                            <img className='budget-main-pic' src={budgetmain} />
                        </div>
                        <div className='work'>Information about my Budget project</div>
                    </div>
                    <div className='my-work'>
                        <div className='work-screenshot'>Dad Jokes project screen shot</div>
                        <div className='work'>Information about my Jokes app</div>
                    </div>
                    <div className='my-work'>
                        <div className='work-screenshot'>Calculator screen shot</div>
                        <div className='work'>Information about my calculator app</div>
                    </div>
                    <div className='my-work'>
                        <div className='work-screenshot'>Color Changer screen shot</div>
                        <div className='work'>Information about my color app</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWork
