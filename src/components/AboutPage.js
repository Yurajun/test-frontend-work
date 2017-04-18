import React from 'react';
import {Link}from 'react-router';                               // eslint-disable-line no-unused-vars
import $ from 'jquery';
import Button from './Button.js';                     // eslint-disable-line no-unused-vars
import EditPopup from './EditPopup.js';                         // eslint-disable-line no-unused-vars
import InfoItem from './InfoItem.js';                         // eslint-disable-line no-unused-vars
import './AboutPage.styl';

export default class AboutPage extends React.Component{

	constructor(props) {
		super(props);
		const {about: messageId} = this.props.params;
		const localList = JSON.parse(localStorage.getItem('people-list'));
		const numMessageId = Number(messageId);
		this.state = {message: localList.find(message => message.id === numMessageId), localList};
	}

	showPopup() {
		$('.edit-popup, .edit-popup__overlay').fadeIn();
		$('body').addClass('open-modal');
	}

	closePopup() {
		$('.edit-popup, .edit-popup__overlay').fadeOut();
		$('body').removeClass('open-modal');
	}

	handleListAdd(newList) {
		const newLists = this.state.localList.slice();
		const noteId = newList.id;
		const newListsNo = newLists.filter(el => el.id !== noteId);
		newListsNo.push(newList);
		const list = JSON.stringify(newListsNo);
		localStorage.setItem('people-list', list);
		this.setState({message: newList});
		this.closePopup();
	}

	render() {
		const {message} = this.state;
		return (
			<div className="wrapper-app">
				<h1 className="app__header"> Информация о сотруднике </h1>
				<div className="about-page__content">
					<InfoItem text="Имя:" message={message.firstName} />
					<InfoItem text="Фамилия:" message={message.lastName} />
					<InfoItem text="Должность:" message={message.position} />
					<InfoItem text="Описание:" message={message.description} />
				</div>
				<div className="app__button-box">
					<Link className="link-button" to="/" > К списку </Link>
					<Button onClick={() => this.showPopup()} text="Редактировать" />
				</div>
				<EditPopup onList={message}
									onClosePopup={() => this.closePopup()}
									onListAdd={newList => this.handleListAdd(newList)}/>
			</div>
		);
	}

}
