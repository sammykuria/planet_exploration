import React, { useEffect,useState } from 'react'

function Home() {
    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchPlanets = async () => {
    try {
      const res = await fetch("https://api.le-systeme-solaire.net/rest/bodies/", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SOLAR_API_KEY}`,
        },
      });

      const data = await res.json();
      const filtered = data.bodies.filter((b) => b.isPlanet);
      setPlanets(filtered);
    } catch (error) {
      console.error("Error fetching planets:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchPlanets();
}, []);


    if (loading) {
        return <p className="text-center text-gray-400 mt-10">Loading palnets ...</p>
    }



  return (
    <div>
      apa ni home


     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {planets.map((planet) => (
        <div
          key={planet.id}
          className="bg-gray-900 text-white rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="text-xl font-bold mb-2 text-center">
            {planet.englishName}
          </h2>
          <p className="text-sm text-gray-300 text-center">
            Gravity: {planet.gravity} m/s²
          </p>
          <p className="text-sm text-gray-300 text-center">
            Density: {planet.density}
          </p>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Home
