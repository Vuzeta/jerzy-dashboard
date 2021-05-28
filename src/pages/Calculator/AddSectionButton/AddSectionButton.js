import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './AddSectionButton.module.css';

const AddSectionButton = ({ addSection, text }) => {
	return (
		<Button
			className={styles.Button}
			variant="contained"
			color="primary"
			onClick={() => addSection()}
		>
			{text}
		</Button>
	);
};

export default AddSectionButton;
