import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { saga } from '../saga/saga';
import serviceReducer from '../slices/serviceSlice';
import servicesReducer from '../slices/servicesSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	devTools: true,
	reducer: {
		services: servicesReducer,
		service: serviceReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
