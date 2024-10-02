import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Service, ServiceState } from '../../models/services';

const initialState: ServiceState = {
	item: null,
	loading: false,
	error: null,
};

export const serviceSlice = createSlice({
	name: 'service',
	initialState,
	reducers: {
		getServiceRequest: state => {
			state.loading = true;
			state.error = null;
		},
		getServiceFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		getServiceSuccess: (state, action: PayloadAction<Service | null>) => {
			state.item = action.payload;
			state.loading = false;
			state.error = null;
		},
	},
});

export const { getServiceRequest, getServiceFailure, getServiceSuccess } =
	serviceSlice.actions;

const serviceReducer = serviceSlice.reducer;
export default serviceReducer;
