import * as React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import IntroComponent from './Components/Intro/IntroComponent';
import CounterComponent from './Components/Counter/CounterComponent';
import InternetComponent from './Components/Internet/InternetComponent';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route exact={true} path="/" component={IntroComponent} />
          <Route exact={true} path="/counter" component={CounterComponent} />
          <Route exact={true} path="/internet" component={InternetComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
