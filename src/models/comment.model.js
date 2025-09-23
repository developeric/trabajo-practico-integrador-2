import { Schema, Types, model } from "mongoose";

const commentSchema = new Schema({
  content: {
    type: String,
    minlenght: 5,
    maxlenght: 500,
    required: true,
  },
  author: {
    type: Types.ObjectId,
    ref: "User",
    unique: true,
  },
  article: {
    type: Types.ObjectId,
    ref: "Article",
  },
});

export const CommentModel = model("Comment", commentSchema);
