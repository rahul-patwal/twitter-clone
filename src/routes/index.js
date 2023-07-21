import express from "express";
import { createTweet, getTweet } from "../controllers/tweet-controller.js";
import { signUp } from "../controllers/user-controller.js";

const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);
router.post('/signUp', signUp);




export default router;