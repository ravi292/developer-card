const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = require("../middleware/config");

// Admin Routes
router.post("/signup", (req, res) => {
	// Implement admin signup logic
	const username = req.body.username;
	const password = req.body.password;

	Admin.create({
		username,
		password,
	});
	res.status(201).json({ message: "Admin created successfully..." });
});

router.post("/signin", async (req, res) => {
	// Implement admin signup logic
	const username = req.body.username;
	const password = req.body.password;

	const user = await Admin.findOne({
		username,
		password,
	});

	if (user) {
		const token = jwt.sign({ username }, JWT_TOKEN);
		res.json(token);
	} else {
		res.status(411).json({ message: "Incorrect email and pass" });
	}
});

router.post("/courses", adminMiddleware, async (req, res) => {
	// Implement course creation logic
	const title = req.body.title;
	const description = req.body.description;
	const imageLink = req.body.imageLink;
	const price = req.body.price;
	// zod
	const newCourse = await Course.create({
		title,
		description,
		imageLink,
		price,
	});

	res.json({
		message: "Course created successfully",
		courseId: newCourse._id,
	});
});

router.get("/courses", adminMiddleware, async (req, res) => {
	// Implement fetching all courses logic
	const response = await Course.find({});

	res.json({
		courses: response,
	});
});

module.exports = router;