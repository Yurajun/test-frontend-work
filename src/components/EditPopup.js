import React from 'react';
import Input from './Input.js';                               // eslint-disable-line no-unused-vars
import Button from './Button.js';                     // eslint-disable-line no-unused-vars
import Textarea from './Textarea.js';                     // eslint-disable-line no-unused-vars

import './EditPopup.styl';

export default class EditPopup extends React.Component{

	constructor(props) {
		super(props);
		const {
			firstName,
			lastName,
			position,
			description,
			id,
		} = this.props.onList;
		this.state = {firstName, lastName, position, description, id};
	}

	handleChangeFirstName(event) {
		this.setState({firstName: event.target.value});
	}

	handleChangeLastName(event) {
		this.setState({lastName: event.target.value});
	}

	handleChangePosition(event) {
		this.setState({position: event.target.value});
	}

	handleChangeDescription(event) {
		this.setState({description: event.target.value});
	}

	handleListAdd() {
		const newList = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			position: this.state.position,
			description: this.state.description,
			id: this.state.id,
		};

		this.props.onListAdd(newList);
	}

	render() {
		return (
			<div>
				<div className="edit-popup__overlay" onClick={() => this.props.onClosePopup()}></div>
				<div className="edit-popup">
					<div className="edit-popup__content">
						<h2 className="edit-popup__header"> Редактировать данные </h2>
						<Input	type="text"
										labeltext="Имя"
										placeholder="Введите имя"
										onChange={e => this.handleChangeFirstName(e)}
										value={this.state.firstName} />
						<Input	type="text"
										labeltext="Фамилия"
										placeholder="Введите фамилию"
										onChange={e => this.handleChangeLastName(e)}
										value={this.state.lastName} />
						<Input	type="text"
										labeltext="Должность"
										placeholder="Введите должность"
										onChange={e => this.handleChangePosition(e)}
										value={this.state.position} />
						<Textarea text="Описание"
											onChange={e => this.handleChangeDescription(e)}
											placeholder="Описание работника"
											rows={6}
											value={this.state.description} />
						<div className="button-block">
							<Button onClick={() => this.props.onClosePopup()} text="Закрыть" />
							<Button onClick={() => this.handleListAdd()} text="Сохранить" />
						</div>
					</div>
				</div>
			</div>
		);
	}

}
