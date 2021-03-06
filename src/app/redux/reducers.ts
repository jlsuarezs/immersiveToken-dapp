import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { IStore } from './IStore';
import {blockchainReducer} from './reducers/blockchain/index';
import {immersiveReducer} from './reducers/immersive/index';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  blockchain: blockchainReducer,
  immersive: immersiveReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
