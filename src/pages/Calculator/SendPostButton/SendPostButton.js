import React from 'react';

import styles from './SendPostButton.module.css';
import Button from '@material-ui/core/Button';

const SendPostButton = ({ handleGenerateXls }) => {
	return (
		<Button
			className={styles.SendBtn}
			variant="contained"
			type="submit"
			onSubmit={handleGenerateXls}
			value="Wygeneruj"
		>
			Wygeneruj
		</Button>
	);
};

export default SendPostButton;
