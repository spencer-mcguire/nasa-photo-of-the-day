import React from "react";
import logo from "../images/logo.png";
import "../App.css";
import styled from "styled-components";

const HeaderContainer = styled.header`
	margin-top: 20px;
	margin-bottom: 20px;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<img className='.App-logo' src={logo} alt='logo' />
		</HeaderContainer>
	);
};
export default Header;
