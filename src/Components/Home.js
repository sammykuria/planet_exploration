import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { Link } from 'react-router-dom';


function Home() {
  const [planets, setPlanets] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchPlanets();
  }, []);

  async function fetchPlanets() {
    const { data, error } = await supabase
      .from('planets')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) console.error('Error fetching data:', error);
    else setPlanets(data);
  }

  const next = () => {
    if (index < planets.length - 4) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="home">
      <h1 className="title">🪐 Explore Galactic gateways</h1>

      <div>
        <div>
          <ul>
            <li><Link>Planets</Link></li>
            <li><Link>Moons</Link></li>
             <li><Link>Asteroids</Link></li>
            <li><Link>Planets</Link></li>
             <li><Link>Planets</Link></li>
          </ul>
        </div>
      </div>

      <div className="slider-container">
        <button className="arrow left" onClick={prev}>◀</button>

        <div className="slider">
          <div
            className="slider-inner smooth-slide"
            style={{
              transform: `translateX(-${index * 25}%)`,
            }}
          >
            {planets.map((planet) => (
              <div key={planet.id} className="planet-card">
                <img src={planet.image_url} alt={planet.name} />
                <h2>{planet.name}</h2>
                <p>{planet.description}</p>
                <p>🌡 {planet.surface_temperature}°C | 🪐 {planet.gravity} m/s²</p>
                <p>🌿 Habitability: {planet.habitability_score}%</p>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={next}>▶</button>
      </div>


            <h1 className="title">🪐 Explore Planets</h1>
      <h1 className="title">🪐 Explore Planets</h1>

    </div>
  );
}

export default Home;
