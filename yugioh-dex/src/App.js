// import './App.css';
// import Navbar from "./components/Navbar"
// import CarouselMain from './components/CarouselMain';
// import SearchForm from './components/SearchFrom';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <CarouselMain />
//       <SearchForm />
//     </div>
//   );
// }

// export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar"
import AllCards from './components/AllCards';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={() => <Home/>} />
        <Route path="/cards" exact component={() => <AllCards />} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;