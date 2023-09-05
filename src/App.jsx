import { useState } from 'react'
import './App.css'
import { puppyList } from "./data";

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find(pup => pup.id === featPupId)
  // console.log(puppies)
  return (
    <>
      { featPupId != null ? <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div> : null
      }
      {puppies.map(pup => {
        console.log(featuredPup)
        return <p key={pup.id} onClick={()=>{setFeatPupId(pup.id)}}>{pup.name}</p>
      })}
    </>
  )
}

export default App
