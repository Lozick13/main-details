import { FC } from 'react';
import BaseButton from '../../ui/BaseButton/BaseButton';
import classes from './fetchdata.module.css';

const FetchData: FC<{
	loading: boolean | null;
	error: string | null;
	click: () => void;
}> = ({ loading, error, click }) => {
	return (
		<>
			<div className={classes['fetch-data']}>
				{loading && <span>Loading...</span>}
				{error && (
					<div className={classes['fetch-data__error']}>
						<span>Error: {error}</span>
						<BaseButton click={click}>Перезагрузить...</BaseButton>
					</div>
				)}
			</div>
		</>
	);
};

export default FetchData;
