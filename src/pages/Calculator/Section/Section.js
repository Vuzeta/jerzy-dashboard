import React from 'react';
import styles from './Section.module.css';
import NumerativeList from '../NumerativeList/NumerativeList';

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
				<input
					type="text"
					className={styles.SectionInput}
					onChange={props.handleFloorName(props.id)}
					value={props.floorName}
					required
				/>
				<span className={styles.SectionAdd} onClick={() => props.addNumerativeList(props.id)}>
					+
				</span>
				<span className={styles.SectionRemove} onClick={() => props.removeSection(props.id)}>
					-
				</span>
			</div>
			{numeratliveList}
		</>
	);
};

export default Section;
