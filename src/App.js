import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage.component'

const HatsPage = () => (
  <div>
    <h1>This is the Hat page</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>This is the Jackets page</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>This is the Sneakers page</h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1>This is the Womans page</h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1>This is the Mens page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage}/>
        <Route path='/jackets' component={JacketsPage}/>
        <Route path='/sneakers' component={SneakersPage} />
        <Route path='/womens' component={WomensPage}/>
        <Route path='/mens' component={MensPage}/>
       </Switch>
    </div>
  );
}

export default App;
