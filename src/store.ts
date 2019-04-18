import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(initialState = {}) {
  return createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));
}
