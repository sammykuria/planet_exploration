import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/planets", async (req, res) => {
  const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies/");
  const data = await response.json();
  res.json(data);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
