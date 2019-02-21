import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import logger from 'redux-logger'


export function initializeStore (initialState) {
    let final_middleware;
if (process.env.NODE_ENV !== 'production') {
    // if development let action appear in console.log
    // final_middleware = applyMiddleware(thunkMiddleware,logger);
    final_middleware = applyMiddleware(thunkMiddleware,logger);
  }else{
    // if production
    final_middleware = applyMiddleware(thunkMiddleware);
  }
  return createStore(
    reducer,
    initialState,
    final_middleware
  )
}
