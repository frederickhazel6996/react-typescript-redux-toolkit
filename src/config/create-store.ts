import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/reducers';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergerLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const store = configureStore({ reducer: rootReducer });

export type AppStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
