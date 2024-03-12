import React,{useState} from 'react'


const Test1 = () => {
    const[user, setUser] =  useState(null)
    const[profile, setProfile] = useState({
        firstname:'',
        lastname:''
    })
    const welcome = "Welcome User!"
    const num = 2;
    console.log('rendered')

    const handleClick = (name) => {
        setUser(name)
    }
    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        console.log(e)
        setProfile((preValue) =>({
            ...preValue, [e.target.name]: e.target.value
        }))
    }
    
return ( 
    <>
        {profile.firstname} &nbsp; {profile.lastname}
        <h1>{ num == 2 && welcome }</h1>
        <button onClick={() => handleClick('pedro')}>Click me Pedro </button>
        <br />
        <button onClick={() => handleClick('juan')}>Click me Juan</button>
        <br />
        <hr />
        <form onSubmit={handleSubmit}>
            <div>
                <label >First Name</label>
                <input type="text" name={'firstname'} onChange={handleChange}/>
            </div>
            <div>
                <label >Last Name</label>
                <input type="text" name={'lastname'} onChange={handleChange}/>
            </div>
            <div>
                <input type="submit" value={'Submit'} />
               
            </div>
        </form>
    </>
)
}


export default Test1