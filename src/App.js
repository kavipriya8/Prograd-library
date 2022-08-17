import Routes from "./routes"
import './App.css';
import background from './images/library.jpg';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <Routes/>
    </div>
  );
}

export default App;
