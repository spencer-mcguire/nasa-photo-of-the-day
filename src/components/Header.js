import React from "react";
import logo from "../images/logo.png";
import "../App.css";

const Header = () => {
	return (
		<header className='header'>
			<img className='.App-logo' src={logo} alt='logo' />
		</header>
	);
};
export default Header;
