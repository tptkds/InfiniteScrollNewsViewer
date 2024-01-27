import { getNewsItems } from './modules/getNewsItems.js';

const statesChangeHandler = {
    set(target, prop, value) {
        target[prop] = value;
        if (prop == 'category') {
            target['page'] = 1;
        }    
        getNewsItems();
        return true;
    },
    get(target, prop) {
        return target[prop];
    }
};


export const store = new Proxy({
    category: 'all',
    page: 1
},
    statesChangeHandler);
