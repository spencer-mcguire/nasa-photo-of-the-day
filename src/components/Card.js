import React from "react";
import "../App.css";

const Card = props => {
	return (
		<div>
			<div>
				<img className='splash' alt='' src={props.imgUrl} />
			</div>
			<div className='card_container'>
				<div className='title'>
					<h2>{props.title}</h2>
				</div>
				<p>{props.date}</p>
				<p>{props.exp}</p>
			</div>
			<form>
				<label>See Another Date</label>
				<input type='text' placeholder='year-month-day'></input>
				<button>submit</button>
			</form>
		</div>
	);
};

export default Card;
