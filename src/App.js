import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
// Inside of your `App.js` file `import { Route } from 'react-router-dom'
import { Route } from 'react-router-dom';

const App = () => (
  <Route>
  <div>
    <Navigation />
  </div>

  {/* // Create Three Routes */}
  <Route path="/" exact component={ Home }/>
  <Route path="/about" component={ About }/>
  <Route path="/contact" component={ Contact }/>
  </Route>
);


export default App;
