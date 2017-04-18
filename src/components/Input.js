import React from 'react';           // eslint-disable-line no-unused-vars
import './Input.styl';

export default class Input extends React.Component{
	render() {
		const {
			type,
			labeltext,
			placeholder,
			onChange,
			value,
		} = this.props;

		return (
			<label className="input-label">
				<span className="input-label__span">{labeltext}:</span>
				<input	className="input-label__input"
								type={type}
								placeholder={placeholder}
								onChange={onChange}
								value={value}/>
			</label>
		);
	}
}
