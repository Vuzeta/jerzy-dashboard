import React from 'react';

import styles from './AddSectionButton.module.css';

const AddSectionButton = ({ addSection, text }) => {
	return (
		<button className={styles.Button} onClick={() => addSection()}>
			{text}
		</button>
	);
};

export default AddSectionButton;
