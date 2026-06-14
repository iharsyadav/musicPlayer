import express from "express";
import cors from "cors";
import songRoutes from "./routes/song.routes.js";


const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Music API Running...");
});

app.use("/api/songs", songRoutes);


export default app;