import $ from 'jquery';                              // eslint-disable-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';                  // eslint-disable-line no-unused-vars
import Button from './Button.js';                     // eslint-disable-line no-unused-vars

import Table from './Table.js';                      // eslint-disable-line no-unused-vars
import AddPopup from './AddPopup.js';                // eslint-disable-line no-unused-vars

import './App.styl';


export default class App extends React.Component{

	constructor() {
		super();
		this.state = {list: []};
	}

	showPopup() {
		$('.add-popup, .add-popup__overlay').fadeIn();
		$('body').addClass('open-modal');
	}

	closePopup() {
		$('.add-popup, .add-popup__overlay').fadeOut();
		$('body').removeClass('open-modal');
	}

	componentWillMount() {
		const localList = JSON.parse(localStorage.getItem('people-list'));
		if (localList){
			this.setState({list: localList});
		}
	}

	componentDidUpdate() {
		this.updateLocalStorage();
	}

	handleListAdd(newList) {
		const newLists = this.state.list.slice();
		newLists.push(newList);
		this.setState({list: newLists});
		this.closePopup();
	}

	render() {
		return (
			<div>
				<div className="wrapper-app">
					<h1 className="app__header"> Список сотрудников </h1>
					<div className="app__button-box">
						<Button onClick={() => this.showPopup()} text="Добавить" />
					</div>
					<div className="app__table">
						<Table list={this.state.list} />
					</div>
				</div>
				<AddPopup onListAdd={newList => this.handleListAdd(newList)}
									onClosePopup={() => this.closePopup()} />
			</div>
		);
	}

	updateLocalStorage() {
		const list = JSON.stringify(this.state.list);
		localStorage.setItem('people-list', list);
	}
}

