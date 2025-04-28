import './App.css';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Services from './Component/Services';
import Testymonials from './Component/Testymonials';

function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
     <Testymonials/>
     <Contact/>
    </div>
  );
}

export default App;
