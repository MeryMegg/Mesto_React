import React from 'react';
import './header.css';
import logo from '../../images/logo.svg'


const Header = () => {
	return (
		<header className="header root__section">
			<img
				src={logo}
				alt="mesto logo"
				className="logo"
			/>
		</header>
	);
};

export default Header;