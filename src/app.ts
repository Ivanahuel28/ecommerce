import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/index";

// de esta manera se cargan la variables de entorno
const PORT = process.env.PORT || 3001; 

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

/* puede configurarse CORS de esta manera 
app.use(cors({
    origin:['http://localhost:4200']
})) */

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));