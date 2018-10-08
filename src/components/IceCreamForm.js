import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer, inject } from 'mobx-react';

@observer
@inject('store')
class IceCreamForm extends Component {
    @observable iceCream = { flavor: "", color: "" }
    @action handleChange = (e) => {
        this.iceCream[e.target.name] = e.target.value;
        console.log(e.target.value)
    }
    submitForm = () => {
        this.props.store.addIceCream(this.iceCream.flavor, this.iceCream.color);
        this.iceCream = { flavor: "", color: "" };
    }
    render() {
        return (
            <div>
                <label htmlFor="flavor" >Flavor:</label>
                <input type="text" name="flavor" value={this.iceCream.flavor} onChange={this.handleChange}></input>
                <label htmlFor="color" >Color:</label>
                <input type="text" name="color" value={this.iceCream.color} onChange={this.handleChange}></input>
                <input type="button" onClick={this.submitForm} value="Submit"></input>
            </div>
        )
    }
}
export default IceCreamForm