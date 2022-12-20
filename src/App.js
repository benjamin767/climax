import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <BrowserRouter>
      <Route 
        exact
        path="/"
        component={NavBar}
      />
      <Route 
      exact path="/"
      component={Home}
      />
    </BrowserRouter>
  );
}

export default App;
