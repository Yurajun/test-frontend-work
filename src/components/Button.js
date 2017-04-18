import React from 'react';                                      // eslint-disable-line no-unused-vars
import './Button.styl';

export default function ({onClick, text}){
	return (
		<button className="button button__popup" onClick={onClick}> {text} </button>
	);
}
