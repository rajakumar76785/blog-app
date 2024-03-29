const express = require("express");
const router = express.Router();

const {showdummypage} = require("../controllers/dummypage");
const {createComment} = require("../controllers/commentControllers");
const {createPost, getAllPost} = require("../controllers/postControllers");
const {likepost, unlikepost} = require("../controllers/likeControllers");

router.get("/showdummypage",showdummypage);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPost);
router.post("/posts/like",likepost);
router.post("/posts/unlike",unlikepost);

module.exports = router;