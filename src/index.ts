import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ?? "3000";

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(path.join(__dirname, "..", "public"));
  console.log(`Server running at http://localhost:${port}/calculator.html`);
});
