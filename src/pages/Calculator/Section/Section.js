import React from 'react';
import styles from './Section.module.css';
import NumerativeList from '../NumerativeList/NumerativeList';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Section = (props) => {
	const numeratliveList = props.roomsConfigurationsList.map((el) => (
		<NumerativeList
			key={el.roomID}
			roomID={el.roomID}
			roomName={el.roomName}
			roomArea={el.roomArea}
			roomHeight={el.roomHeight}
			roomAirflow={el.roomAirflow}
			roomExhaust={el.roomExhaust}
			removeNumerativeList={props.removeNumerativeList}
			addNumerativeList={props.addNumerativeList}
			handleNumerativeField={props.handleNumerativeField}
			id={props.id}
		/>
	));
	return (
		<>
			<div className={styles.SectionFieldSet}>
				<TextField
					id="outlined-basic"
					label="Nazwa Sekcji"
					className={styles.SectionInput}
					onChange={props.handleFloorName(props.id)}
					value={props.floorName}
					variant="outlined"
					inputProps={{
						style: { textAlign: 'center', height: '20px', fontSize: '20px' },
					}}
					required
				/>
				<Button
					variant="contained"
					className={styles.AddBtn}
					onClick={() => props.addNumerativeList(props.id)}
				>
					+
				</Button>
				<Button
					variant="contained"
					className={styles.RemoveBtn}
					onClick={() => props.removeSection(props.id)}
				>
					-
				</Button>
			</div>
			{numeratliveList}
		</>
	);
};

export default Section;
