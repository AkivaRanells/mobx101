import { observable } from "mobx";

class IceCream{
    id;
    @observable flavor;
    @observable color;
    @observable  comments = [];
    constructor(flavor, color){
        this.flavor=flavor;
        this.color=color;
    }
}

export default IceCream;