import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import AllPlanets from './AllPlanets';
import NavBar from './Components/NavBar';
import PlanetSlider from './Components/PlanetSlider';

function App() {
  return (
    <div className="App">
      <NavBar />

     <Routes>
      <Route path='/planets' element={<Home />} />
        <Route path='/' element={<AllPlanets />} />
        <Route path='/planetslider' element={<PlanetSlider />} />
     </Routes>

    </div>
  );
}

export default App;
