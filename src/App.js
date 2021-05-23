
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>    
  );
}

export default App;
