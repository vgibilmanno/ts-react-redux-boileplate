import { Middleware } from 'redux';
import config from 'react-global-configuration';
import { InternetActions, PostTextAction, setText } from './InternetActions';

export const internetMiddleware: Middleware = store => next => (action: any) => {
    switch (action.type) {
        case InternetActions.GET_TEXT:
            next(action);
            getText(store);
            break;
        case InternetActions.POST_TEXT:
            next(action);
            postText(store, action);
            break;
        default:
            return next(action);
    }
};

interface DummyData {
    id: number;
    text: string;
}

function getText(store: any) {
    const baseUrl = config.get('dummyServiceBaseUri') as string;
    fetch(baseUrl + 'api/getDummyData', {
        method: 'GET',
    })
        .then(response => response.json())
        .then((dummyData: DummyData) => {
            store.dispatch(setText(dummyData.text));
        });
}

async function postText(store: any, action: PostTextAction) {
    console.log('You can either use the promise style by using .then() or go with async/await');
    const baseUrl = config.get('dummyServiceBaseUri') as string;
    let response = await fetch(baseUrl + `api/postText?text=${action.text}`, {
        method: 'POST',
    });

    if (!response.ok) {
        console.log('The service had a problem with our text!');
    }

    console.log('You could make further REST requests here and dispatch actions');
}