import Song from "../models/Song.js";
import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = (
  buffer,
  folder,
  resource_type = "image"
) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          resource_type,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      )
      .end(buffer);
  });
};

// GET ALL SONGS
export const getSongs = async (req, res) => {
  try {
    const songs = await Song.find();

    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPLOAD SONG
export const uploadSong = async (req, res) => {
  try {
    const { title, artist, genre } = req.body;

    // CHECK DUPLICATE TITLE
    const existingSong = await Song.findOne({
      title: {
        $regex: `^${title.trim()}$`,
        $options: "i",
      },
    });

    if (existingSong) {
      return res.status(400).json({
        success: false,
        message: "Song with this title already exists",
      });
    }

    const coverFile = req.files?.cover?.[0];
    const audioFile = req.files?.audio?.[0];

    if (!coverFile || !audioFile) {
      return res.status(400).json({
        success: false,
        message: "Cover and audio files required",
      });
    }

    const coverUpload = await uploadToCloudinary(
      coverFile.buffer,
      "music-player/covers",
      "image"
    );

    const audioUpload = await uploadToCloudinary(
      audioFile.buffer,
      "music-player/audio",
      "video"
    );

    const song = await Song.create({
      title: title.trim(),
      artist,
      genre,
      coverUrl: coverUpload.secure_url,
      audioUrl: audioUpload.secure_url,
    });

    res.status(201).json({
      success: true,
      song,
    });
  } catch (error) {
    console.log(error);

    // HANDLE MONGODB UNIQUE ERROR
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Song with this title already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};