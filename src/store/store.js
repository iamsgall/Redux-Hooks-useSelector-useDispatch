import {createStore} from 'redux';
import reducer from './reducers/reducer';

// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

export default createStore(reducer);
