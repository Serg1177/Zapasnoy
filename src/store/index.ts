import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { type } from 'os'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({

})

const preloadedState = {
    user: {},
    visibilityFilter: 'SHOW_COMPLETED',
  }

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
  }

const store = configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>{ 
       return getDefaultMiddleware()
        .concat(middlewares)
    },
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {
  store
}