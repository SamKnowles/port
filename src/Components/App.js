import React from 'react'
import Landing from './Landing'
import MyWork from './MyWork'
import Nav from './Nav'

import '../Styles/Nav.css'
import '../Styles/App.css'
import '../Styles/Landing.css'
import '../Styles/MyWork.css'

function App() {
    return (
        <div className='app-wrapper'>
            <div className='main-view-wrapper'>
                <Landing />
                <MyWork />
            </div>
        </div>
    )
}

export default App
