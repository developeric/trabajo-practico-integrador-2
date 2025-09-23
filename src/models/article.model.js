import { ObjectId } from "bson";
import { Schema, Types, model } from "mongoose";

const articleSchema = new Schema({
  title: {
    type: String,
    minlenght: 3,
    maxlenght: 200,
    required: true,
  },
  content: {
    type: String,
    minlenght: 50,
    required: true,
  },
  excerpt: {
    type: String,
    maxlenght: 500,
  },
  status: {
    type: String,
    enum: ["published", "archived"],
    default: "published",
  },
  author: {
    type: Types.ObjectId,
    ref: "User",
    unique: true,
  },
  tags: {
    type: [Types.ObjectId],
    ref: "Tag",
  },
});

export const ArticleModel = model("Article", articleSchema);
