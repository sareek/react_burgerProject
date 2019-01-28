import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
             <p>Test </p>
             <BurgerBuilder></BurgerBuilder>
          </Layout>
        

      </div>
    );
  }
}

export default App;
 