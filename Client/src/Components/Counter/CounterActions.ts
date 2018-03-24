export enum CounterActions {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

export interface IncrementAction {
    type: CounterActions.INCREMENT;
}

export interface DecrementAction {
    type: CounterActions.DECREMENT;
}

export type KnowCounterActions = IncrementAction & DecrementAction;

export function increment(): IncrementAction {
    return { type: CounterActions.INCREMENT };
}

export function decrement(): DecrementAction {
    return { type: CounterActions.DECREMENT };
}