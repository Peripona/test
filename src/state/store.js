import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// Add your reducers here.
const rootReducer = combineReducers({
  // Remove below dummy reducer when you have one.
  test: () => null,
});

const store = createStore(
  rootReducer,
  {},
  // Necessary for redux developer tools
  // https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export { Provider, store };
