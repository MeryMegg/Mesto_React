import React from 'react';
import './footer.css';

const Footer = () => {
	const year = (new Date()).getFullYear();
	return (
		<footer className="footer root__section">
			<p className='footer__copyright'>&#169; {year} Mesto Russia</p>
		</footer>
	);
};

export default Footer;