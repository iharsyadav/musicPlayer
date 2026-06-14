import express from "express";
import upload from "../middleware/upload.js";

import { uploadSong, getSongs } from "../controllers/song.controller.js";

const router = express.Router();

router.get("/", getSongs);

router.post(
  "/debug-upload",
  upload.fields([
    { name: "cover", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  (req, res) => {
    console.log("BODY =>", req.body);
    console.log("FILES =>", req.files);

    res.json({
      body: req.body,
      files: req.files,
    });
  },
);

router.post(
  "/upload",
  upload.fields([
    { name: "cover", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  uploadSong,
);

export default router;
