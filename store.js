const statesChangeHandler = {
    set(target, prop, value, receiver) {
        target[prop] = value;
        if (prop == 'category') {
            store.page = 1;
        }    
        return true;
    },
    get(target, prop, receiver) {
        return target[prop];
    }
};


export const store = new Proxy({
    category: 'all',
    page: 1
},
    statesChangeHandler);
