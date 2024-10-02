import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Service, ServicesState } from '../../models/services';

const initialState: ServicesState = {
	items: null,
	loading: false,
	error: null,
};

export const servicesSlice = createSlice({
	name: 'services',
	initialState,
	reducers: {
		getServicesRequest: state => {
			state.loading = true;
			state.error = null;
		},
		getServicesFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		getServicesSuccess: (state, action: PayloadAction<Service[] | null>) => {
			state.items = action.payload;
			state.loading = false;
			state.error = null;
		}
	},
});

export const { getServicesRequest, getServicesFailure, getServicesSuccess } =
	servicesSlice.actions;

const servicesReducer = servicesSlice.reducer;
export default servicesReducer;
