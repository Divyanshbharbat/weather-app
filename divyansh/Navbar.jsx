import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const url='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
  const key='13c9949a97a3f1ff20456959ae10d9ef'
let t=async ()=>
{
 let res= await axios.get(`${url}?q=${box}&appid=${key}`).then((res)=>console.log(res.data))
}
const [result, setresult] = useState('')
const [box, setbox] = useState('')

  return (
    <>
    <div className="container-fluid">

 
 <form >
  <input onChange={(e)=>
    {e.preventDefault()
      setbox(e.target.value)

    }
  } type="text" placeholder='Enter the City Name' />
  <button onSubmit={()=>
    {
      t()
    }
  }>Search</button>
 </form>

    </div>
    
    <div className="container">
    {result}
    </div>
    </>
  )
}

export default App