/* eslint-disable react/prop-types */
import "./Card.css";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";

export function Card({ card }) {
	console.log(card.name);
	console.log(card.description);
	console.log(card.interest);
	console.log(card.links);
	return (
		<div className="cardDiv">
			<h1>{card.name}</h1>
			<h4>{card.description}</h4>
			<h3>Interests:</h3>
			<h4>{card.interest}</h4>
			<a href={card.linkedin} target="_blank" rel="noreferrer">
				<img src={linkedinIcon} alt="LinkedIn Icon" />
				LinkedIn
			</a>
			<a href={card.github} target="_blank" rel="noreferrer">
				<img src={githubIcon} alt="GitHub Icon" /> GitHub
			</a>
		</div>
	);
}