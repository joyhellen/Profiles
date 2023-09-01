import { useEffect, useState } from "react";
import './Rick.css'
import { Link } from "react-router-dom"



const Rick = ()=>{ 
  const [ characters, setCharacter ] = useState([])
  const [ searchValue, setValue ] = useState("")

  const fetchData = async ()=>{
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    console.log(data) 
    setCharacter(data.results) 
  }

  const handleChange = (e)=>{
    setValue(e.target.value)
  }
  
  useEffect(()=>{
    fetchData()
  }, [])
  return (
    <div>
      <div>
        <input type="text" onChange={handleChange}/>
      </div>
      {
        characters.filter((char)=>{
          if (searchValue === "" || char.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return char
          }
        }).map((character)=>{
          return (
          <div key={character.id} className="card"> 
            <img src={character.image} alt="Image"/>
            <h1>{character.name }</h1>
            <Link to={`/character/${character.id}`} state={character}>View Details</Link>
          </div>
          )
        })
      }
    </div>
  )
}


export default Rick;