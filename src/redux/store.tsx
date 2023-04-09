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
import diplomes from "./slices/diplome.slice";
import { unistafapi } from "./services/unistafapi";

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
  schools,
  diplomes,
  [unistafapi.reducerPath]: unistafapi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// TODO: desactiver devTools en production
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  // middleware: [thunk]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unistafapi.middleware),
})

export const persistor = persistStore(store)

export interface iStore {
  user: {
    currentUser: object
  },
  schools: {
    listSchools: []
  },
  diplomes: {
    currentDiplome: {
      name: string,
      description: string,
      faculty_id: number,
      outlets: string,
      advantages: string,
      prerequisite: string
    }
  }
}

export type AppDispatch = typeof store.dispatch;