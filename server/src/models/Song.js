import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true, // Prevent duplicate titles
      lowercase: true,
      trim: true,
    },

    artist: {
      type: String,
      required: true,
    },

    coverUrl: {
      type: String,
      required: true,
    },

    audioUrl: {
      type: String,
      required: true,
    },

    duration: Number,

    genre: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Song", songSchema);