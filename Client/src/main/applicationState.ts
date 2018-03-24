import { RouterState } from 'react-router-redux';
import { CounterState } from '../Components/Counter/CounterReducer';
import { InternetState } from '../Components/Internet/InternetReducer';

export interface ApplicationState {
    routerState: RouterState;
    counterState: CounterState;
    internetState: InternetState;
}