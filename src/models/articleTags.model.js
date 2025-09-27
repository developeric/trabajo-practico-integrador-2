import { Schema, Types, model } from "mongoose";

const articleTagSchema = new Schema({
  article: {
    type: [Types.ObjectId],
    ref: "Article",
  },
  tag: {
    type: [Types.ObjectId],
    ref: "Tag",
  },
});

export const ArticleTagModel = model("ArticleTag",articleTagSchema)
