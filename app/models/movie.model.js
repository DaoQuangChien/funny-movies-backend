const mongoose = require("mongoose");

const User = mongoose.model(
  "Movie",
  new mongoose.Schema(
    {
      title: String,
      description: String,
      movieUrlId: String,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      upVotes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      downVotes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    { timestamps: true }
  )
);

module.exports = User;
