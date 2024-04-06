import  { useEffect, useState } from 'react'
import Loading from './components/loading'
import Tours from './components/tours'
import './App.css'


export default function App() {

  const [loading , setLoading] = useState(true)
  const [tours , setTours] = useState(true)


  function removeTours(id){
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)

  }
  
  async function fetchTours(){
    setLoading(true)
    try{
      const response = await fetch('http://localhost:3000/list')
      const tours = await response.json()
      setLoading(false)
      setTours(tours)

    }catch(error){
      setLoading(false)
      console.log(error)

    }
   
   }
 useEffect(()=>{
  fetchTours()

 }, [])

  if (loading){
    return(
      <main>
        <Loading/>
      </main>
    );
  }

  if(tours.length === 0){
    return <main>
      <div className="totle">
        <h2>No Tours left....</h2>
        <button className='btn ' onClick={fetchTours}>Fetch Tours</button>
      </div>
    </main>

  }
  return (
    <main>
      <Tours tours={tours} removeTours={removeTours}/>
    </main>
   
  )
}
