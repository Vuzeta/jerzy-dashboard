import React from 'react';

import styles from './SendPostButton.module.css';

const SendPostButton = ({ handleGenerateXls }) => {
	return (
		<input className={styles.Button} type="submit" onSubmit={handleGenerateXls} value="Wygeneruj" />
	);
};

export default SendPostButton;
