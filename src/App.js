import React, { Component } from 'react';
import './App.css';
import {observer, inject} from 'mobx-react';
import IceCreamForm from './components/IceCreamForm';
import IceCreamView from './components/IceCreamView';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to Mobx</h1>
        <IceCreamView/>
        <IceCreamForm />
      </div>
    );
  }
}

export default App;
