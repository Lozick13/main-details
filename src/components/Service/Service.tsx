import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { requestGetService } from '../../redux/saga/saga';
import BaseButton from '../../ui/BaseButton/BaseButton';
import FetchData from '../FetchData/FetchData';
import classes from './service.module.css';

const Service = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { item, loading, error } = useAppSelector(state => state.service);
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		if (id) dispatch(requestGetService(id));
	}, [dispatch, id]);

	return (
		<main className={classes['service']}>
			<div className={classes['back']}>
				<BaseButton click={() => navigate(-1)}>Назад</BaseButton>
			</div>
			<FetchData
				loading={loading}
				error={error}
				click={() => {
					console.log(id);
					if (id) dispatch(requestGetService(id));
				}}
			/>
			{item && !loading && !error && (
				<>
					<h1>{item.name}</h1>
					<p>Описание: {item.content}</p>
					<p>Цена: {item.price} руб.</p>
				</>
			)}
		</main>
	);
};

export default Service;
