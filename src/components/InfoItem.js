import React from 'react';        // eslint-disable-line no-unused-vars
import './InfoItem.styl';

export default function ({text, message}){
	return (
		<div className="info-block">
			<span className="info-block__span">{text}</span>
			<p className="info-block__p">{message}</p>
		</div>
	);
}
