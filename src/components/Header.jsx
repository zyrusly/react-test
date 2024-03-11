import React, { useEffect } from 'react'
import '../Styles/Header.css'

function Header({user, handleClick}) { //destructure
    const green = 'green'
    const num = 3;

    // useEffect
    // routing
    // fetching using axios


  return (
    <div className={'header-wrapper'}>
        <div  className={'header-container'} style={{color: num == 2 ? green : 'red'}}>
            <p>
            Temp Title Hello {user}
            </p>
            <div>
              <button onClick={() => handleClick('Guest')}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Header