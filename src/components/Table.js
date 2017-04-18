import React from 'react';
import PropTypes from 'prop-types';
import TableContent from './TableContent.js';         // eslint-disable-line no-unused-vars
import './Table.styl';

export default class Table extends React.Component{

	constructor(context) {
		super(context);
	}

	handlePrew(rowId) {
		this.context.router.push(`/${rowId}`);
	}

	render() {
		const {list} = this.props;
		return (
			<table className="table-app">
				<thead className="table-app__head">
					<tr>
						<th className="table-app__th">Имя</th>
						<th className="table-app__th">Фамилия</th>
						<th className="table-app__th">Должность</th>
					</tr>
				</thead>
				<tbody>
					{
						list.map( el =>
							<TableContent key={el.id}
														firstName={el.firstName}
														lastName={el.lastName}
														position={el.position}
														description={el.description}
														onClick={this.handlePrew.bind(this, el.id)}/> )
					}
				</tbody>
			</table>
		);
	}
}

Table.contextTypes = {
	router: PropTypes.object.isRequired,
};
