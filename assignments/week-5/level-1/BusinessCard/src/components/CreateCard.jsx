import { useState } from "react";
import { Card } from "./Card";

export function CreateCard() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [interest, setInterest] = useState("");
	const [linkedin, setLinkedInLink] = useState("");
	const [github, setgithubLink] = useState("");
	const [card, setCard] = useState([]);

	return (
		<div>
			<input
				type="text"
				placeholder="Enter name"
				onChange={function (e) {
					console.log("setname");
					setName(e.target.value);
				}}
			/>
			<br></br>
			<input
				type="text"
				placeholder="Enter description"
				onChange={function (e) {
					setDescription(e.target.value);
				}}
			/>
			<br></br>
			<input
				type="text"
				placeholder="Enter interest"
				onChange={function (e) {
					setInterest(e.target.value);
				}}
			/>
			<br></br>
			<input
				type="text"
				placeholder="Enter LinkedIn link"
				onChange={function (e) {
					setLinkedInLink(e.target.value);
				}}
			/>
			<br></br>
			<input
				type="text"
				placeholder="Enter GitHub link"
				onChange={function (e) {
					setgithubLink(e.target.value);
				}}
			/>
			<br></br>
			<button
				onClick={() => {
					setCard([
						...card,
						{
							name: name,
							description: description,
							interest: interest,
							linkedin: linkedin,
							github: github,
						},
					]);
				}}
			>
				Create Card
			</button>
			<br />

			<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
				{card.map((c, index) => {
					return (
						<>
							<Card key={index} card={c}></Card>
						</>
					);
				})}
			</div>
		</div>
	);
}