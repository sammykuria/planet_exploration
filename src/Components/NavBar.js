import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <ul>
                <li>
                    <Link to='/'>Origin</Link>
                </li>
                 <li>
                    <Link>The Fleet</Link>
                </li>
                 <li>
                    <Link to='/planets'>Worlds</Link>
                </li>
                 <li>
                    <Link>Expeditions</Link>
                </li>
                 <li>
                    <Link>Origin</Link>
                </li>
            </ul>

            <div>
                <button>Join Mission</button>
            </div>
        </div>
      
    </div>
  )
}

export default NavBar
