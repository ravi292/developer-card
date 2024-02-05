/* can you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

*/
	// Create a new div element to hold the clock
	const clockDiv = document.createElement("div");
	clockDiv.innerHTML = markdown;

	// Get the time element from the HTML
	const timeElement = clockDiv.querySelector("time");

	// Update the time every second
	setInterval(() => {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();
		const time = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

		// Update the time element with the new time
		timeElement.textContent = time;
	}, 1000);

	// Add the clock div to the page
	document.body.appendChild(clockDiv);

// Pad a number with leading zeros if needed
function pad(num) {
	return (num < 10 ? "0" : "") + num;
}