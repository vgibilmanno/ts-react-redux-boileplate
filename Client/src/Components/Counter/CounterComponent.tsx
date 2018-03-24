import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { increment, decrement } from './CounterActions';
import { ApplicationState } from '../../main/applicationState';

interface CounterComponentStateProps {
    counter: number;
 }

interface CounterComponentDispatchProps {
    increment: () => void;
    decrement: () => void;
 }

type CounterComponentProps = CounterComponentStateProps & CounterComponentDispatchProps;

interface CounterComponentState { }

class CounterComponent extends React.Component<CounterComponentProps, CounterComponentState> {
    public render() {
        return (
            <div>
                <p>{this.props.counter}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
          </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState): CounterComponentStateProps => {
    return {
        counter: state.counterState.counter
    };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): CounterComponentDispatchProps => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterComponent);