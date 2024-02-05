const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = require("../middleware/config");

// User Routes
router.post("/signup", (req, res) => {
	// Implement user signup logic
	const username = req.body.username;
	const password = req.body.password;

	User.create({
		username,
		password,
	});

	res.status(201).json({ message: "User created successfully..." });
});

router.post("/signin", async (req, res) => {
	// Implement admin signup logic
	const username = req.body.username;
	const password = req.body.password;

	const user = await User.findOne({
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

router.get("/courses", async (req, res) => {
	// Implement listing all courses logic

	const allcourses = await Course.find();

	res.json({
		courses: allcourses,
	});
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// Implement course purchase logic
	const courseId = req.params.courseId;
	const username = req.username;

	try {
		await User.updateOne(
			{
				username,
			},
			{
				$push: {
					purchasedCourses: courseId,
				},
			}
		);
		res.json({ message: "Purchase completed!" });
	} catch (e) {
		console.log(e);
		res.status(400).json({
			message:
				"Error while purchase, please try again with right details",
		});
	}
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	// Implement fetching purchased courses logic
	const user = await User.findOne({
		username: req.username,
	});

	const purchase = await Course.find({
		_id: {
			$in: user.purchasedCourses,
		},
	});
	console.log(purchase);

	res.status(200).json({ courses: purchase });
});

module.exports = router;