import './App.css';
import SearchBar from './components/SearchBar';
import BookData  from './Data.json'
function App() {
  return (
    <div className="App">
     <SearchBar placeholder='search manga here ....' data={BookData}/>
    </div>
  );
}

export default App;
