import React from 'react';

function Welcome({title="Welcome", body="Hi!"}) {
	return (
		<div>
		<h2>{title}</h2>
		<br/>
		<p>{body}</p>
		</div>
	);
}

function HomePage({title="", body=""}) {
	return (
		<div>


		<p>HOMEPAGE</p>


		<Welcome title={title} body={body}/>

		</div>
	);
}

export default HomePage;