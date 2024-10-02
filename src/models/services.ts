export interface Service {
	id: number;
	name: string;
	price: number;
	content?: string;
}

export interface ServicesState {
	items: Service[] | null;
	loading: boolean;
	error: string | null;
}

export interface ServiceState {
	item: Service | null;
	loading: boolean;
	error: string | null;
}
