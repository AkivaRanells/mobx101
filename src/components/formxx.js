import React, { Component } from 'react';
import { observer, inject} from 'mobx-react'
import {observable,action} from 'mobx'

@observer
@inject('store')
class IceCreamForm2 extends Component {

  @observable iceCream = {flavor:"",  color:""};
 
  @action inputChange = (e)=>{
      this.iceCream[e.target.name]  = e.target.value;
  }
  submitForm = (e)=>{
      console.log(this.iceCream);
  }
  render() {
    return (
      <div className="container">
        <input type="text" name="flavor" onChange={this.inputChange} value={this.iceCream.flavor}/>
        <input type="text" name="color" onChange={this.inputChange} value={this.iceCream.color}/>
        <input type="button" onClick={this.submitForm} value="submit"/>
      </div>
    );
  }
}

export default IceCreamForm2;