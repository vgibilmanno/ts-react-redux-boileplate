import { createStore, compose, applyMiddleware } from 'redux';
import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import { Provider, Store } from 'react-redux';
import { ApplicationState } from './main/applicationState';
import RootReducer from './main/RootReducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { internetMiddleware } from './Components/Internet/InternetMiddleware';
import config from 'react-global-configuration';
import configuration from './main/Configuration';

const rootElement = document.getElementById('root') as HTMLElement;

const history = createHistory();

let appliedMiddleware = applyMiddleware(
  thunk,
  routerMiddleware(history),
  internetMiddleware
);

let enhancer = window['devToolsExtension']
  ? compose(appliedMiddleware, window['devToolsExtension']())
  : appliedMiddleware;

let store = createStore(RootReducer, enhancer) as Store<ApplicationState>;

config.set(configuration);

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <App/>
      </ConnectedRouter>
  </Provider>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./App', () => {
      ReactDOM.render(
          <Provider store={store}>
              <ConnectedRouter history={history}>
                  <App/>
              </ConnectedRouter>
          </Provider>,
          rootElement
      );
  });
}

registerServiceWorker();