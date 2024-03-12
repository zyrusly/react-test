import React, {useEffect, useState }  from 'react'
import axios from 'axios'

function Home() {

  const [data, setData] = useState(null)

  const [loading, setLoading] = useState(true)

  const [num, setNum] = useState(0)

  const fetchTodo = async () => {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
          setData(response.data)
          setLoading(false)
        })
    }
    catch(error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchTodo()
    console.log('useEffect ran ' + num )
  }, [num])


  return (
    <div>
        <h3>THIS IS HOME</h3>
        {num}
        <br />
        <button onClick={() => {setNum((prev) =>prev + 1)}}> Count</button>
        {loading
         ? <p>Loading...</p> :
          <ul>
              {data.map((item, index) => {
                return <h3>{item.title}</h3>
                })}
          </ul>
        
          }
    </div>
  )
}

export default Home