import React from 'react';

import styles from './NumerativeList.module.css';

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
			<input
				type="text"
				className={styles.Input}
				placeholder="Nazwa pom."
				name="roomName"
				onChange={handleNumerativeField(id, roomID)}
				required
			/>
			<input
				type="number"
				className={styles.Input}
				placeholder="Pow. [m2]"
				name="roomArea"
				onChange={handleNumerativeField(id, roomID)}
				required
			/>
			<input
				type="number"
				className={styles.Input}
				placeholder="Wys. pom.[m]"
				name="roomHeight"
				onChange={handleNumerativeField(id, roomID)}
				required
			/>
			<input
				type="number"
				className={styles.Input}
				placeholder="Nawiew [m3/h]"
				name="roomAirflow"
				onChange={handleNumerativeField(id, roomID)}
				required
			/>
			<input
				type="number"
				className={styles.Input}
				placeholder="Wywiew [m3/h]"
				name="roomExhaust"
				onChange={handleNumerativeField(id, roomID)}
				required
			/>
			<span className={styles.FieldRemove} onClick={() => removeNumerativeList(id, roomID)}>
				-
			</span>
		</div>
	);
};

export default NumerativeList;
