import React from 'react';
import Counter from './Counter';

const Review = (props) => (
	<div>
		<br/>
		<b>{props.str}</b>
		<Counter stars={props.stars} />
		<br/>
	</div>
);

const Reviews = () => (
	<div>
		<Review str="Good" stars="5" />
		<Review str="Fail" stars="1" />
		<Review str="Norm" stars="3" />
	</div>
);

export default Reviews;