import React from "react";

const About = () => {
	const devs = [
		"🦧Oscar Lezcano🦧",
		"🦦Christopher Mendoza🦦",
		"🪿Alan Valenzuela🪿",
	];

	const li = [];
	for (const dev of devs) {
		li.push(<li className="badge badge-info mr-1 p-4 font-bold">{dev}</li>);
	}

	return (
		<div className="m-10">
			<h1 className="h1">Este projecto fue desarrollado por:</h1>
			<ul className="my-4">{li}</ul>
		</div>
	);
};

export default About;
