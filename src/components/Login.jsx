import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const[user, setUser] =  useState(null)
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/', {replace:false})
    }

    const handleChange = (e) => {
        console.log(e)
        setUser((preValue) =>({
            ...preValue, [e.target.name]: e.target.value
        }))
    }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <form >
                username: <input type="text" name={'username'} onChange={handleChange}/>
                <br />
                <br />
                passowrd: <input type="password" name={'password'} onChange={handleChange}/>
                <br />
                <br />
                <input type="button" value="Log In" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default Login