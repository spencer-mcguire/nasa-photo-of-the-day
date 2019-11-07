import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
	margin-top: 20px;
	margin-bottom: 20px;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<p>Copywrite 2019</p>
		</FooterContainer>
	);
};
export default Footer;
