import {observable} from 'mobx';
class Comments{
    id;
    @observable user;
    @observable comment
    constructor(user, comment){
        this.user = user;
        this.comment = comment;
    }
}
export default Comments