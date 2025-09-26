import { Schema, Types, model } from "mongoose";

const tagSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      minlenght: 2,
      maxlenght: 30,
      match: [/^\S+$/, "El Tag no puede contener espacios"],
      required: true,
    },
    description: {
      type: String,
      maxlenght: 200,
    },
  },
  {versionKey:false,
    toJSON: { virtuals: true },
  }
);

tagSchema.virtual("article", {
  ref: "Article",
  localField: "_id",
  foreignField:"tag"
});

export const TagModel = model("Tag", tagSchema);
