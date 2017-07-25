//Redux store
import { createStore } from 'redux'
import { reducers } from './reducers.js'

export let store = createStore(reducers);
