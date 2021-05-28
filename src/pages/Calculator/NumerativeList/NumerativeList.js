import React from 'react';

import styles from './NumerativeList.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const NumerativeList = ({
	id,
	roomID,
	roomName,
	roomArea,
	roomHeight,
	roomAirflow,
	roomExhaust,
	removeNumerativeList,
	handleNumerativeField,
}) => {
	return (
		<div className={styles.FieldsContainer}>
			<TextField
				id="outlined-required"
				label="Naz.pom"
				variant="outlined"
				className={styles.Input}
				required
				name="roomName"
				onChange={handleNumerativeField(id, roomID)}
			/>
			<TextField
				id="outlined-required"
				label="Pow. [m2]"
				variant="outlined"
				type="number"
				required
				name="roomArea"
				onChange={handleNumerativeField(id, roomID)}
			/>
			<TextField
				id="outlined-required"
				label="Wys. pom.[m]"
				type="number"
				variant="outlined"
				required
				name="roomHeight"
				onChange={handleNumerativeField(id, roomID)}
			/>
			<TextField
				id="outlined-required"
				label="Nawiew [m3/h]"
				type="number"
				variant="outlined"
				required
				name="roomAirflow"
				onChange={handleNumerativeField(id, roomID)}
			/>
			<TextField
				id="outlined-required"
				label="Wywiew [m3/h]"
				type="number"
				variant="outlined"
				name="roomExhaust"
				onChange={handleNumerativeField(id, roomID)}
			/>
			<Button
				variant="contained"
				className={styles.RemoveBtn}
				onClick={() => removeNumerativeList(id, roomID)}
			>
				-
			</Button>
		</div>
	);
};

export default NumerativeList;
