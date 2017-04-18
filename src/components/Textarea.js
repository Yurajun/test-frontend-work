import React from 'react';                                      // eslint-disable-line no-unused-vars
import './Textarea.styl';

export default function ({text, onChange, placeholder, rows, value}){
	return (
		<label className="textarea-label">
			<span className="textarea-label__span"> {text}: </span>
			<textarea	className="textarea-label__textarea"
								onChange={onChange}
								placeholder={placeholder}
								rows={rows}
								value={value}
								>
			</textarea>
		</label>
	);
}
