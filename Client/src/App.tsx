import * as React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import IntroComponent from './Components/Intro/IntroComponent';
import CounterComponent from './Components/Counter/CounterComponent';
import InternetComponent from './Components/Internet/InternetComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const logo = require('./logo.svg');

const timeout = { enter: 300, exit: 200 };

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route
          render={({ location }) => (
            <div>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={timeout} appear={true}>
                  <div className="app-content">
                    <Switch location={location}>
                      <Route exact={true} path="/" component={IntroComponent} />
                      <Route exact={true} path="/counter" component={CounterComponent} />
                      <Route exact={true} path="/internet" component={InternetComponent} />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
