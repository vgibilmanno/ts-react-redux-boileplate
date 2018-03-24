import { KnowInternetActions, InternetActions } from './InternetActions';

export interface InternetState {
    text: string;
}

const initialState: InternetState = {
    text: 'Try to load some data from our service!'
};

function InternetReducer(state: InternetState = initialState, action: KnowInternetActions): InternetState {
    switch (action.type) {
        case InternetActions.SET_TEXT:
            return { 
                ...state,
                text: action.text
             };
        default:
            return state;
    }
}

export default InternetReducer;