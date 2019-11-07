import React from "react";
import "../App.css";
import { Container } from "reactstrap";
import DateForm from "./Form";
import styled from "styled-components";

const CardContainer = styled.div`
	margin: 35px;
	box-shadow: 10px 10px 5px #aaaaaa;
	margin: 30px;
	padding: 15px;
	text-align: center;
`;

const TitleDiv = styled.div`
	border-bottom: 1px solid black;
	background: rgba(0, 0, 0, 0.3);
	padding: 20px;
	padding: 20px;
`;

const CardImg = styled.img`
	width: auto;
	height: 500px;
`;

const Card = props => {
	return (
		<Container>
			<CardImg alt='pic of the day' src={props.imgUrl} />
			<CardContainer>
				<TitleDiv>
					<h2>{props.title}</h2>
				</TitleDiv>
				<p>{props.date}</p>
				<p>{props.exp}</p>
			</CardContainer>
			<DateForm handleChange={props.handleChange} state={props.state} />
		</Container>
	);
};

export default Card;
