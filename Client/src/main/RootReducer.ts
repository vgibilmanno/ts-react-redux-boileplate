import { combineReducers } from 'redux';
import { ApplicationState } from './applicationState';
import { routerReducer } from 'react-router-redux';
import counterReducer from '../Components/Counter/CounterReducer';
import InternetReducer from '../Components/Internet/InternetReducer';

const RootReducer = combineReducers<ApplicationState>({
    routerState: routerReducer,
    counterState: counterReducer,
    internetState: InternetReducer
});

export default RootReducer;