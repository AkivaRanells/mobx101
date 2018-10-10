import IceCream from '../../components/IceCream'
import {observable, action, computed} from 'mobx';
import Comments from '../../components/Comments'
class IceCreamStore {
    id= 0;
    @observable iceCreams = [{flavor:'Peanut',color:'Beije', id: this.id}];
    @observable filterString = "";
    @action addIceCream=(flavor, color)=>{
        this.id+=1;
        this.iceCreams.push(new IceCream(flavor, color));
    }
    @action addComment(user, comment, iceCreamId){
        let index = this.getIndexById(iceCreamId);
        this.iceCreams[index].comments.push(new Comments(user, comment))
    }
    @action deleteIceCream=(id)=>{
        let index = this.getIndexById(id);
        this.iceCreams.splice(index,1);
    }

    getIndexById=(id)=>{
        let index;
        for(let i = 0; i<this.iceCreams.length; i++){
            let curId=this.iceCreams[i].id;
            if(curId===id){
                index=i
                return index;
            }
        }
    } 

    @action editIceCream=(index, iceCream)=>{
        this.iceCreams[index] = iceCream;
    }
    @computed get filteredArray(){
        return this.iceCreams.filter((iceCream)=>{
           return iceCream.flavor.includes(this.filterString)
        })
    }
}
const store = new IceCreamStore();
export default store;