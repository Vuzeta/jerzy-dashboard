import React, { Component } from 'react';
import axios from 'axios';
import styles from './Calculator.module.css';
import Loader from '../../components/Loader/Loader';
import SendPostButton from './SendPostButton/SendPostButton';
import AddSectionButton from './AddSectionButton/AddSectionButton';

import Section from './Section/Section';

class Calculator extends Component {
	state = {
		list: [],
		loading: false,
	};

	addSection = () => {
		const obj = {
			id: Date.now(),
			floorName: '',
			roomsConfigurations: [],
		};
		this.setState((prevState) => ({
			list: [...prevState.list, obj],
		}));
	};

	addNumerativeList = (id) => {
		let list = this.state.list;
		let indexOfItem = list.findIndex((item) => item.id === id);

		let item = { ...list[indexOfItem] };

		const obj = {
			roomID: Date.now(),
			roomName: `${list.length}`,
			roomArea: null,
			roomHeight: null,
			roomAirflow: null,
			roomExhaust: null,
		};
		item.roomsConfigurations.push(obj);

		this.setState({ list });
	};

	removeSection = (id) => {
		let filterList = this.state.list.filter((item) => item.id !== id);
		this.setState({
			list: filterList,
		});
	};

	handleFloorName = (id) => (event) => {
		let list = this.state.list;
		let indexOfItem = list.findIndex((item) => item.id === id);

		let item = { ...list[indexOfItem] };
		item.floorName = event.target.value;
		list[indexOfItem] = item;

		this.setState({ list });
	};

	removeNumerativeList = (id, elementIndex) => {
		let list = this.state.list;
		let indexOfItem = list.findIndex((item) => item.id === id);

		let item = { ...list[indexOfItem] };
		let elementIndexInItem = item.roomsConfigurations.findIndex(
			(item) => item.roomID === elementIndex,
		);
		item.roomsConfigurations.splice(elementIndexInItem, 1);
		this.setState({ list });
	};

	handleNumerativeField = (elementID, roomID) => (event) => {
		const value = event.target.value;
		const fieldName = event.target.name;

		let list = this.state.list;

		let indexOfElement = list.findIndex((item) => item.id === elementID);

		let item = { ...list[indexOfElement] };

		let indexOfRoom = item.roomsConfigurations.findIndex((item) => item.roomID === roomID);

		item.roomsConfigurations[indexOfRoom][`${fieldName}`] = value;

		this.setState({ list });
	};

	handleGenerateXls = (e) => {
		e.preventDefault();
		let list = this.state.list;
		this.setState({ loading: true }, () => {
			axios
				.post('http://sklodowska.adziel.io:8082/postdata', list)
				.then((res) => {
					console.log(res);
					this.setState({ loading: false });
					const url = window.URL.createObjectURL(new Blob([res.data]));
					const link = document.createElement('a');
					link.href = url;
					link.setAttribute('download', 'file.docx'); //or any other extension
					document.body.appendChild(link);
					link.click();
				})
				.catch((error) => {
					console.log(error);
				});
		});
	};

	render() {
		const section = this.state.list.map((obj) => (
			<Section
				key={obj.id}
				id={obj.id}
				floorName={obj.floorName}
				roomsConfigurationsList={obj.roomsConfigurations}
				removeSection={this.removeSection}
				handleFloorName={this.handleFloorName}
				removeNumerativeList={this.removeNumerativeList}
				handleNumerativeField={this.handleNumerativeField}
				addNumerativeList={this.addNumerativeList}
			/>
		));
		return (
			<div className={styles.Container}>
				<AddSectionButton addSection={this.addSection} text="Dodaj sekcję" />
				<form className={styles.Form} onSubmit={this.handleGenerateXls}>
					{section}
					{this.state.loading && <Loader />}
					{this.state.list.length > 0 ? (
						<SendPostButton handleGenerateXls={this.handleGenerateXls} />
					) : null}
				</form>
			</div>
		);
	}
}

export default Calculator;
