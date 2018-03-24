export enum InternetActions {
    GET_TEXT = 'GET_TEXT',
    SET_TEXT = 'SET_TEXT',
    POST_TEXT = 'POST_TEXT',
}

export interface GetTextAction {
    type: InternetActions.GET_TEXT;
}

export interface SetTextAction {
    type: InternetActions.SET_TEXT;
    text: string;
}

export interface PostTextAction {
    type: InternetActions.POST_TEXT;
    text: string;
}

export type KnowInternetActions = GetTextAction & SetTextAction & PostTextAction;

export function getText(): GetTextAction {
    return { type: InternetActions.GET_TEXT };
}

export function setText(text: string): SetTextAction {
    return {
        type: InternetActions.SET_TEXT,
        text: text
    };
}

export function postText(text: string): PostTextAction {
    return {
        type: InternetActions.POST_TEXT,
        text: text
    };
}