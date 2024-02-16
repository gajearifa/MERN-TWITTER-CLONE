import express from "express";

import { verifyToken } from "../verifyToken.js";
import { createTweet, deleteTweet, getAllTweets, getExploreTweets, getUserTweets, likeOrDislike } from "../controllers/tweet.js";

const router=express.Router();

router.post("/",verifyToken,createTweet);

router.delete("/:id",verifyToken,deleteTweet);

router.put("/:id/like",likeOrDislike);

// get all timeline tweets
router.get("/timeline/:id", getAllTweets);

// get user Tweets only
router.get("/user/all/:id",getUserTweets);

//explore
router.get("/explore", getExploreTweets);

export default router;