const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require("../db");

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

router.get("/courses", (req, res) => {
	// Implement listing all courses logic
	Course.find().then((course) => {
		res.status(200).json({ courses: course });
	});
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// Implement course purchase logic
	const courseId = req.params.courseId;
	const username = req.headers.username;
	await User.updateOne(
		{
			username: username,
		},
		{
			$push: {
				purchasedCourses: courseId,
			},
		}
	);
	res.status(200).json({ message: "Purchase complete!" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	// Implement fetching purchased courses logic
	const user = await User.findOne({
		username: req.headers.username,
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