import React from 'react'
import fampic from '../Images/fampic.jpg'
import budgetMain from '../Images/budget-main.png'
import dadJokes from '../Images/dad-jokes.png'
import calc from '../Images/calc.png'
import colorChanger from '../Images/color-changer.png'

function MyWork() {
    return (
        <div className='my-work-wrapper'>
            <div className='my-work-container'>
                <div className='pic-maybe-container'>
                    <div className='pic-maybe'>
                        <div className='pic'>
                            <img className='fam-pic' src={fampic} />
                        </div>
                        <div className='my-info'>Here's information about me and shit.  Retired stay at home dad.  Retired amateur basketball player.  And surprisingly to a lot of people, not gay.</div>
                    </div>
                </div>
                <div className='work-list-container'>
                    <div className='my-work'>      
                            <a className='work-screenshot' href="https://cash-money-budget.herokuapp.com/"><img className='budget-main-pic' src={budgetMain} alt=''/></a>
                        <div className='work'>Information about my Budget project</div>
                    </div>
                    <div className='my-work'>
                        <div className='work-screenshot'>
                            <img className='dad-jokes-pic' src={dadJokes} alt=''/>
                        </div>
                        <div className='work'>Information about my Dad Jokes app</div>
                    </div>
                    <div className='my-work'>
                        <div className='work-screenshot'>
                            <img className='calc-pic' src={calc} alt=''/>
                        </div>
                        <div className='work'>Information about my Calculator app</div>
                    </div>
                    <div className='my-work'>
                        <div className='work-screenshot'>
                            <img className='color-changer-pic' src={colorChanger} alt=""/>
                        </div>
                        <div className='work'>Information about my Color Changer app</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWork
