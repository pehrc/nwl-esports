import express, { request, response } from "express";

const app = express();

app.get("/games", (req, res) => {
  return res.json([
    { id: 1, name: "Anuncio 01" },
    { id: 2, name: "Anuncio 02" },
    { id: 3, name: "Anuncio 03" },
    { id: 4, name: "Anuncio 04" },
  ]);
});

app.post("/ads", (req, res) => {
  return res.status(201).json([]);
});

app.get("/game/:id/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Anuncio 01" },
    { id: 2, name: "Anuncio 02" },
    { id: 3, name: "Anuncio 03" },
    { id: 4, name: "Anuncio 04" },
  ]);
});

app.get("/ads/:id/discord", (req, res) => {
  return res.json([]);
});

app.listen(3333);
