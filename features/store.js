import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH, PAUSE,
    PERSIST, persistReducer, persistStore, PURGE,
    REGISTER, REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from "./rootReducers";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck : false,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }),
    devTools : process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore (store)
export default store;