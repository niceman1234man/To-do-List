import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import { addTaskreducer } from './reducers/Taskreducer.js'
import { thunk } from 'redux-thunk'
export const store=createStore(
    addTaskreducer,
    composeWithDevTools(
        applyMiddleware(thunk)
       
      )
)