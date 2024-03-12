import React, { useEffect } from 'react'
import '../Styles/Header.css'
import {useNavigate, Link} from 'react-router-dom'

function Header({user, handleClick}) { //destructure
  const navigate = useNavigate()
    const green = 'green'
    const num = 3;

    // useEffect
    // routing
    // fetching using axios


  return (
    <div className={'header-wrapper'}>
        <div  className={'header-container'} style={{color: num == 2 ? green : 'red'}}>
            <p>
            <h1>Welcome! {user}</h1> 
            </p>
            <div >
                <ul style={{display:'flex', flexDirection:'row', listStyle:'none'}}>
                  <li style={{ margin:'15px'}}>
                   <Link to={'/'}>Home</Link>
                  </li>
                  <li style={{ margin:'15px'}}>
                  <Link to={'/about'}>About</Link>
                  </li>
                  <li style={{ margin:'15px'}}>
                  <Link to={'/test'}>Test</Link>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header