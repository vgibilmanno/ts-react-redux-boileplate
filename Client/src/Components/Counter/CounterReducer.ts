import { KnowCounterActions, CounterActions } from './CounterActions';

export interface CounterState {
    counter: number;
}

const initialState: CounterState = {
    counter: 0
};

function counterReducer(state: CounterState = initialState, action: KnowCounterActions): CounterState {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case CounterActions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

export default counterReducer;