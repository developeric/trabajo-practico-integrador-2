import { Schema, Types, model } from "mongoose";
import { CommentModel } from "./comment.model.js";

const articleSchema = new Schema(
  {
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
    //
    author: {
      type: Types.ObjectId,
      ref: "User",
      unique: true,
    },
    tag: {
      type: [Types.ObjectId],
      ref: "Tag",
    },
    //
  },
  {versionKey:false,
    toJSON: { virtuals: true },
  }
);

articleSchema.virtual("comment", {
  ref: "Comment",
  localField: "_id",
  foreignField: "article",
});
export const ArticleModel = model("Article", articleSchema);
