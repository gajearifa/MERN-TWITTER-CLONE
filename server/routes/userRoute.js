import express from "express";
import { deleteUser, getUser, update,follow, unFollow } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id",verifyToken,update)

router.get("/find/:id",getUser);

router.delete("/:id",verifyToken,deleteUser);

// Follow
router.put("/follow/:id", verifyToken, follow);

// Unfollow
router.put("/unfollow/:id", verifyToken, unFollow);


export default router;