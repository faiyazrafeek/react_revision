import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Result from './components/result/Result';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Result/>
    </div>
  );
}

export default App;
