import { Schema, Types, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      minlength: 3,
      maxlength: 20,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      //tiene que ser tipo email
    },
    password: {
      type: String,
      required: true,
      //tiene que estar hasheada
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profile: {
      firstName: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true,
      },
      lastName: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true,
      },
      biography: {
        type: String,
        maxlength: 500,
      },
      avatar_url: {
        type: String,
        //tiene que ser url
      },
      birth_date: {
        type: Date,
      },
    },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
  }
);

//Crea un campo virtual para que funcione el Populate
//
userSchema.virtual("articles", {
  ref: "Article",
  localField: "_id",
  foreignField: "author",
});

userSchema.virtual("comment",{
  ref:"Comment",
  localField:"_id",
  foreignField: "author"
})

export const UserModel = model("User", userSchema);
