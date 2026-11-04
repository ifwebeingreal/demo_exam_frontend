import { makeAutoObservable } from "mobx";

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(isLoading) {
        this.isLoading = isLoading;
    }

    user = null;
    isLoading = true;
}

export default UserStore;