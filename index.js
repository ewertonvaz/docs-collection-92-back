import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";
import cors from "cors";
import userRoutes from './routes/user.routes.js';
import fileRoutes from './routes/file.routes.js';
import bookRoutes from "./routes/book.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const dbName = process.env.MONGO_DATABASE;
const corsOptions = {
    origin: "*",
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/users", userRoutes);
app.use("/file", fileRoutes);
app.use("/books", bookRoutes);

connect(dbName);

app.listen( port, () => { console.log(`App up and running on http://localhost:${port}`) })