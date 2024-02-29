import express from "express";
const app = express();
import { nanoid } from "nanoid";
import fs from "node:fs";
import path from "node:path";

app.use(express.json());
const fileRes = fs.readFileSync("./UrlShortner/Urlmap.json");
app.post("/url-shortner", (req, res) => {
  console.log(req.body);
  const longUrl = req.body.url;
  const shortUrl = nanoid(10);

  let allUrls = JSON.parse(fileRes.toString());
  allUrls = { ...allUrls, [shortUrl]: longUrl };
  fs.writeFileSync("./UrlShortner/Urlmap.json", JSON.stringify(allUrls));

  res.json({
    success: true,
    url: `http://localhost:5173/${shortUrl}`,
  });
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);
  let allUrls = JSON.parse(fileRes.toString());
  console.log(allUrls[req.params.id]);
  res.redirect(allUrls[req.params.id]);
});

app.listen(5173, () => {
  console.log("running");
  // console.log(path.join("./", "Urlshortner"));
});
