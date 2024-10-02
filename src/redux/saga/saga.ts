import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import { getServiceById, getServices } from '../../api';
import { ACTION_TYPES } from '../../models/action';
import { Service } from '../../models/services';
import {
	getServiceFailure,
	getServiceRequest,
	getServiceSuccess,
} from '../slices/serviceSlice';
import {
	getServicesFailure,
	getServicesRequest,
	getServicesSuccess,
} from '../slices/servicesSlice';

function* handleGetServicesSaga() {
	try {
		yield put(getServicesRequest());

		const data: Service[] = yield call(getServices);
		yield put(getServicesSuccess(data));
	} catch (error: unknown) {
		let errorMessage: string;

		if (error instanceof Error) {
			errorMessage = error.message;
		} else {
			errorMessage = 'Unknown error';
		}

		yield put(getServicesFailure(errorMessage));
	}
}
function* handleGetServiceSaga(action: PayloadAction<string>) {
	try {
		yield put(getServiceRequest());

		const data: Service = yield call(getServiceById, action.payload);
		yield put(getServiceSuccess(data));
	} catch (error: unknown) {
		let errorMessage: string;

		if (error instanceof Error) {
			errorMessage = error.message;
		} else {
			errorMessage = 'Unknown error';
		}

		yield put(getServiceFailure(errorMessage));
	}
}

function* watchGetServiceSaga() {
	yield takeLatest(ACTION_TYPES.GET_SERVICE_REQUEST, handleGetServiceSaga);
}
function* watchGetServicesSaga() {
	yield takeLatest(ACTION_TYPES.GET_SERVICES_REQUEST, handleGetServicesSaga);
}

export function* saga() {
	yield spawn(watchGetServiceSaga);
	yield spawn(watchGetServicesSaga);
}

export const requestGetServices = createAction<void>(
	ACTION_TYPES.GET_SERVICES_REQUEST
);
export const requestGetService = createAction<string>(
	ACTION_TYPES.GET_SERVICE_REQUEST
);
