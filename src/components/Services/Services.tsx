import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Service } from '../../models/services';
import { requestGetServices } from '../../redux/saga/saga';
import FetchData from '../FetchData/FetchData';
import classes from './services.module.css';

const Services = () => {
	const dispatch = useAppDispatch();
	const { items, loading, error } = useAppSelector(state => state.services);

	useEffect(() => {
		dispatch(requestGetServices());
	}, [dispatch]);

	return (
		<main className={classes['services']}>
			<FetchData
				loading={loading}
				error={error}
				click={() => {
					dispatch(requestGetServices());
				}}
			/>
			<ul className={classes['services__items']}>
				{items &&
					!loading &&
					!error &&
					items.map((service: Service) => (
						<li key={service.id}>
							<NavLink
								className={classes['services__item']}
								to={`/services/${service.id}`}
							>
								{`${service.name} - ${service.price}`}
							</NavLink>
						</li>
					))}
			</ul>
		</main>
	);
};

export default Services;
