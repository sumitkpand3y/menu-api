import express from "express";

const router = express.Router();

import createEpic from "../controllers/epics";

router.post('/addOne', createEpic.createEpic)

export default router;