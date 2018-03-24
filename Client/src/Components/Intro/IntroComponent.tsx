import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState } from '../../main/applicationState';
import { push } from 'react-router-redux';

interface IntroComponentStateProps { }

interface IntroComponentDispatchProps {
    navigateToCounter: () => void;
    navigateToInternet: () => void;
}

type IntroComponentProps = IntroComponentStateProps & IntroComponentDispatchProps;

interface IntroComponentState { }

class IntroComponent extends React.Component<IntroComponentProps, IntroComponentState> {
    public render() {
        return (
            <div>
                <p>To get started, edit <code>src/App.tsx</code> and save to reload.</p>
                <button onClick={this.props.navigateToCounter}>
                    Navigate to counter
                </button>

                <button onClick={this.props.navigateToInternet}>
                    Navigate to internet
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState): IntroComponentStateProps => {
    return {
        // ...mapStateToProps
    };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): IntroComponentDispatchProps => {
    return {
        navigateToCounter: () => dispatch(push('/counter')),
        navigateToInternet: () => dispatch(push('/internet'))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntroComponent);