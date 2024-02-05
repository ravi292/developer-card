// Middleware for handling auth

const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = require("../middleware/config");
function adminMiddleware(req, res, next) {
	// Implement admin auth logic
	// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

	const bearer = req.headers.authorization;
	const temp = bearer.split(" ");
	const token = temp[1];

	try {
		const decodedValue = jwt.verify(token, JWT_TOKEN);
		if (decodedValue.username) {
			req.username = decodedValue.username;
			next();
		} else {
			res.status(403).json({ message: "You are not authenticated..." });
		}
	} catch (e) {
		console.log(e);
		res.status(404).json({ message: "Incorrect inputs" });
	}
}

module.exports = adminMiddleware;