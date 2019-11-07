import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";
import styled from "styled-components";

const AppContainer = styled.div`
	text-align: center;
`;

function App() {
	return (
		<AppContainer>
			<Header />
			<Body />
			<Footer />
		</AppContainer>
	);
}

export default App;
