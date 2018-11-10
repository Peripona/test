import React, { Component } from 'react';
import { Provider, store } from './state/store';
import styles from './App.css';
import cs from 'classnames';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <p className={cs(styles.App, styles.test)}>Hello world</p>
      </Provider>
    );
  }
}

export default App;
