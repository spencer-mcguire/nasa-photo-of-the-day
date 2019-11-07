import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";
import { Container, Spinner } from "reactstrap";

import Axios from "axios";

const Body = () => {
	const [data, setData] = useState({});
	const [state, setState] = useState("2019-11-07");

	function handleChange(event) {
		setState(event.target.value);
	}

	function handleSubmit(event) {
		alert("You changed the date to: " + state.value);
		event.preventDefault();
	}

	useEffect(() => {
		Axios.get(
			`https://api.nasa.gov/planetary/apod?api_key=Zu8ST0QfIvfmcbkg5b9dB5fNRmeGYdUGNwZPFoeR&date=${state}`
		)
			.then(res => {
				setData(res.data);
			})
			.catch(err => console.log(`HOLD ON:`, err));
	}, [data, state]);
	if (!data.url) return <Spinner type='grow' color='danger' />;
	return (
		<Container>
			<Card
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				imgUrl={data.url}
				title={data.title}
				date={data.date}
				exp={data.explanation}
			/>
		</Container>
	);
};

export default Body;
