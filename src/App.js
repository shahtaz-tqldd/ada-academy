import './App.css';
import logo from './assets/icons/logo.png'
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
