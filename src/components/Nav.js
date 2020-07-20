import React from 'react';
import './nav.css';
import logo from './img/logo.svg';

export default function Nav() {
	return (
		<div>
			<nav className="nav-bar">
				<a href="_blank">
					<img src={logo} />
				</a>
				<a href="_blank">Home</a>
				<a href="_blank">About</a>
				<a href="_blank" style={{ color: 'green' }}>
					Tours
				</a>
			</nav>
		</div>
	);
}
