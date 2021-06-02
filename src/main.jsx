import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '@/views/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import storeData, { rootSaga } from '@/store'
import createSagaMiddleware from 'redux-saga'

const logger = (store) => (next) => (action) => {
  console.log("logger:", store.getState());
  console.log("logger:", action);
  return next(action);
}
const sagaMiddleware = createSagaMiddleware()
const store = createStore(storeData, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)
console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
