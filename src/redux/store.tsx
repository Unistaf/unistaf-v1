import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import storage from 'redux-persist/lib/storage';
// import storage from 'redux-persist-indexeddb-storage';
import localforage from 'localforage';
import storageSession from 'redux-persist/lib/storage/session'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import thunk from 'redux-thunk';
import schools from "./slices/schools.slice";

const persistConfig: { key: string, storage: any } = {
  key: 't',
  storage: localforage,
}

// !user persit location using session storage
const userPersistConfig = {
  key: 'u',
  storage: storageSession,
}

const rootReducer = combineReducers({
  // user: userReducer
  user: persistReducer(userPersistConfig, userReducer),
  schools
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// TODO: desactiver devTools en production
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  // middleware: [thunk]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export interface iStore {
  user: {
    currentUser: object
  },
  schools:{
    listSchools: []
  }
}

export type AppDispatch = typeof store.dispatch;