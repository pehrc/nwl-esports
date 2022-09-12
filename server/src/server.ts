import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Anuncio 01" },
    { id: 2, name: "Anuncio 02" },
    { id: 3, name: "Anuncio 03" },
    { id: 4, name: "Anuncio 04" },
  ]);
});

app.listen(3333);
