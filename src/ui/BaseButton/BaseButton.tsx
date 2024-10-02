import { FC } from 'react';
import classes from './basebutton.module.css';

const BaseButton: FC<{
	click: () => void;
	children: React.ReactNode;
}> = ({ click, children }) => {
	return (
		<>
			<button className={classes['base-button']} onClick={click}>
				{children}
			</button>
		</>
	);
};

export default BaseButton;
