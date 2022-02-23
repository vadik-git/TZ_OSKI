import {LOGIN_USER} from './types';

const initialState = {
    isAuth: false,
    email: ""
};

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: 
            return {
                ...state,
                isAuth: true,
                email: action.payload
            }
        default: 
            return state; 

    }
}