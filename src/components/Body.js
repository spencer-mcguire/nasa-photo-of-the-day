import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";
import Axios from "axios";

const Body = () => {
	const [data, setData] = useState({});
	const [state, setState] = useState("2019-11-04");

	function handleChange(event) {
		setState({ value: event.target.value });
	}

	function handleSubmit(event) {
		alert("A name was submitted: " + this.state.value);
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
	if (!data.url) return <h3>Loading...</h3>;
	return (
		<div className='body_container'>
			<Card
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				imgUrl={data.url}
				title={data.title}
				date={data.date}
				exp={data.explanation}
			/>
		</div>
	);
};

export default Body;
