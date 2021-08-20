import './App.css';
import Navbar from "./components/Navbar"
import CarouselMain from './components/CarouselMain';
import SearchForm from './components/SearchFrom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselMain />
      <SearchForm />
    </div>
  );
}

export default App;
