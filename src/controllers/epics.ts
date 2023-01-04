import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { title } from "process";

import UserModel from "../models/epics";

const createEpic = (req: Request, res: Response, next: NextFunction) => {
  const { title, description, status, tags, color } = req.body;

  const epics = new UserModel({
    _id: new mongoose.Types.ObjectId(),
    title,
    description,
    status,
    tags,
    color,
  });
  return epics
    .save()
    .then((epics) => res.status(201).json({ epics }))
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createEpic,
};
