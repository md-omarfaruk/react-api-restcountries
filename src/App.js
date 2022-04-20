import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import CountryInfo from './components/CountryInfo/CountryInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/country/:countryName" element={<CountryInfo/>} />

        <Route path="*" element={<NoMatch/>} />

      </Routes>
    </div>
  );
}

export default App;
