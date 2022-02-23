import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import {loginReducer} from '../components/login/reducer';

const rootReducer = combineReducers({
    login: loginReducer
});

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));