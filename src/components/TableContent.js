import React from 'react';       // eslint-disable-line no-unused-vars
import {Link}from 'react-router';       // eslint-disable-line no-unused-vars
import './TableContent.styl';

export default class TableContent extends React.Component{

	render() {
		const {
			firstName,
			lastName,
			position,
			onClick,
		} = this.props;

		return (
			<tr className="table-app__tr" onClick={() => onClick()}>
				<td className="table-app__td"> {firstName} </td>
				<td className="table-app__td"> {lastName} </td>
				<td className="table-app__td"> {position} </td>
			</tr>
		);
	}
}
