import React, { useEffect,useState } from 'react'
import { supabase } from './supabaseClient'

function Home() {
    const [planets, setPlanets] = useState([])


    useEffect(() => {
    fetchPlanets()
  }, [])

    async function fetchPlanets() {
      const { data, error } = await supabase
      .from('planets')
      .select("*")
      .order('created_at', {ascending:false})

      if (error) console.error('Error fetching data:',error)
       else setPlanets(data)
      
    }






  return (
    <div>
      apa ni home


     <div className="grid gap-4">
      {planets.map(planet => (
        <div key={planet.id} className="p-4 border rounded-lg bg-gray-900 text-white">
          <img src={planet.image_url} alt='wee'></img>
          <h2 className="text-xl font-bold">{planet.name}</h2>
         
          <div className='bumbaa'>
          <p>Description: {planet.description }</p>
          <p>Distance: {planet.distance_from_earth}</p>
          <p>Temperature: {planet.surface_temperature}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Habitability: {planet.habitability_score}%</p>
            </div>

        </div>
      ))}
    </div>

    </div>
  )
}

export default Home
