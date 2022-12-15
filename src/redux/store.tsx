import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import storage from 'redux-persist/lib/storage';
// import storage from 'redux-persist-indexeddb-storage';
import localforage from 'localforage';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig: {key: string, storage: any} = {
  key: 'root',
  storage: localforage,
}

const userPersistConfig = {
  key: 'u',
  storage: storageSession,
}

const rootReducer = combineReducers({
  // user: userReducer
  user: persistReducer(userPersistConfig, userReducer)
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// TODO: desactiver devTools en production
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  // middleware: [thunk]
})

export const persistor = persistStore(store)

export interface iStore {
  user: object,
}

export type AppDispatch = typeof store.dispatch;