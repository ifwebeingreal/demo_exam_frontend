import { makeAutoObservable } from "mobx";

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    setUser(user) {
        this.user = user;
    }
    
    user = null;
}

export default UserStore;