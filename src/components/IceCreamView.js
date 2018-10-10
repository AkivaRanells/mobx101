import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, observable } from 'mobx';

@inject('store')
@observer
class IceCreamView extends Component {
    store = this.props.store;
    @observable iceCream = { flavor: "", color: "" };
    @observable hide = false;
    @action handleChange = (e) => {
        this.iceCream[e.target.name] = e.target.value;
    }
    deleteButton = (e) => {
        let parsed = parseInt(e.target.value);
        this.store.deleteIceCream(parsed);
    }
    formSubmit = (e) => {
        this.store.editIceCream(e.target.value);
    }

    @action toggle = (e) => {
        this.hide = !this.hide;
        if (this.hide) {
            let parsed = parseInt(e.target.value);
            let index = this.store.getIndexById(parsed);
            this.iceCream = this.store.iceCreams[index];
        } else {
            this.iceCream = { flavor: "", color: "" };
        }
    }
    @action changeFilter=(e)=>{
        this.store.filterString = e.target.value; 
    }
    render() {
        return (
            <div>
                <h1>Your search for {this.store.filterString} returned {this.store.filteredArray.length} out of {this.store.iceCreams.length}</h1>
                <input value={this.store.filterString} onChange={this.changeFilter}></input>
                <ul>
                    {this.store.filteredArray.map((iceCream) => <li key={iceCream.id}>{iceCream.flavor} {iceCream.color}
                        <button value={iceCream.id} onClick={this.deleteButton}>Delete</button>
                        <button value={iceCream.id} onClick={this.toggle}>Edit</button></li>)}
                    {this.hide && <span>
                        <label htmlFor="flavor" >Edit Flavor:</label>
                        <input type="text" name="flavor" value={this.iceCream.flavor} onChange={this.handleChange}></input>
                        <label htmlFor="color" >Edit Color:</label>
                        <input type="text" name="color" value={this.iceCream.color} onChange={this.handleChange}></input>
                        <input type="button" onClick={this.toggle} value="Close"></input></span>}
                </ul>

            </div>
        )
    }

}
export default IceCreamView