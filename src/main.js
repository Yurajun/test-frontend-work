import './components/helpers/variables.styl';
import './components/helpers/mixins.styl';
import './components/helpers/fonts.styl';
import './components/helpers/optimize.styl';


import React from 'react';                                 // eslint-disable-line no-unused-vars
import {render}from 'react-dom';
import {Router, Route, hashHistory}from 'react-router';    // eslint-disable-line no-unused-vars
import App from './components/App.js';                     // eslint-disable-line no-unused-vars
import AboutPage from './components/AboutPage.js';         // eslint-disable-line no-unused-vars



render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/:about" component={AboutPage} />
	</Router>,
	document.getElementById('mount-point')
);

