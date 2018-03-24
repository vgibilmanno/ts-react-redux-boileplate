import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState } from '../../main/applicationState';
import { getText, postText } from './InternetActions';

interface InternetComponentStateProps {
    text: string;
}

interface InternetComponentDispatchProps {
    getText: () => void;
    postText: (text: string) => void;
}

type InternetComponentProps = InternetComponentStateProps & InternetComponentDispatchProps;

interface InternetComponentState {
    input: string;
}

class InternetComponent extends React.Component<InternetComponentProps, InternetComponentState> {
    state: InternetComponentState = {
        input: 'Type something into me'
    };

    onInputChanged(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            input: event.currentTarget.value
        });
    }

    submitInput() {
        this.props.postText(this.state.input);
        this.setState({
            input: ''
        });
    }

    public render() {
        return (
            <div>
                <p>Text in service: {this.props.text}</p>
                <button onClick={this.props.getText}>Load data</button>
                <br />
                <br />
                <input value={this.state.input} onChange={(event) => this.onInputChanged(event)} />
                <button onClick={() => this.submitInput()}>Send</button>
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState): InternetComponentStateProps => {
    return {
        text: state.internetState.text
    };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): InternetComponentDispatchProps => {
    return {
        getText: () => dispatch(getText()),
        postText: (text: string) => {
            console.log('You could dispatch more actions here but avoid side effects if possible.');
            dispatch(postText(text));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(InternetComponent);