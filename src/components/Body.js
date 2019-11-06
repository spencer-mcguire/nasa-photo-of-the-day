import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";
import Axios from "axios";

const Body = () => {
	const [data, setData] = useState({});
	useEffect(() => {
		Axios.get(
			"https://api.nasa.gov/planetary/apod?api_key=Zu8ST0QfIvfmcbkg5b9dB5fNRmeGYdUGNwZPFoeR"
		)
			.then(res => {
				setData(res.data);
			})
			.catch(err => console.log(`HOLD ON:`, err));
	}, []);

	return (
		<div className='body_container'>
			<Card
				data={data}
				imgUrl={data.url}
				title={data.title}
				date={data.date}
				exp={data.explanation}
			/>
		</div>
	);
};

export default Body;
