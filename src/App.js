import React, { Component } from 'react';
import './App.css';
import {observer, inject} from 'mobx-react';
import IceCreamForm2 from './components/formxx';
import IceCreamForm from './components/IceCreamForm';

@observer
@inject('store')

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to Mobx</h1>
        <ul>
          {this.props.store.iceCreams.map((iceCream, i)=><li key={i}>{iceCream.flavor}</li>)}
        </ul>
        <IceCreamForm />
        <IceCreamForm2 />
      </div>
    );
  }
}

export default App;
