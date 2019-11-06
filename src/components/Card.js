import React from "react";

const Card = props => {
	return (
		<div>
			<div>
				<img alt='' src={props.imgUrl} />
			</div>
			<div>
				<div>
					<h2>{props.title}</h2>
				</div>
				<p>{props.date}</p>
				<p>{props.exp}</p>
			</div>
		</div>
	);
};

export default Card;
