import express from "express";
import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import jwt from "jsonwebtoken";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Read and check env variables
dotenv.config();
(() => {
    const required = [
        "SERVER_PORT",
        "SERVER_HOST",
        "WEB_APP_ORIGIN",
        "WEB_USER",
        "WEB_PASSWORD",
        "JWT_SECRET",
    ];
    const missing = required.filter((key) => !process.env[key]);
    if (missing.length > 0)
        throw new Error(`Missing required environment variable(s): ${missing.join(", ")}`);
})();
const PORT = Number(process.env.SERVER_PORT);
const HOST = process.env.SERVER_HOST ?? "";
const ALLOWED_ORIGIN = process.env.WEB_APP_ORIGIN ?? "";
const USER = process.env.WEB_USER ?? "";
const PASSWORD = process.env.WEB_PASSWORD ?? "";
const SECRET = process.env.JWT_SECRET ?? "";
// Read SSL certificate and key
const privateKey = fs.readFileSync(path.join(__dirname, "ssl", "key.pem"));
const certificate = fs.readFileSync(path.join(__dirname, "ssl", "cert.pem"));
const credentials = { key: privateKey, cert: certificate };
// Create express app
const app = express();
// Set CORS Requests Options
const corsOptions = {
    origin: ALLOWED_ORIGIN,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST"],
};
// Set IP rate limits for login endpoint
const loginLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, //1h
    limit: 5,
});
// Add middlewares and security
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
// Create jwt
app.post("/login", loginLimiter, (req, res) => {
    const user = req.body;
    const random = Math.random();
    if (user.username !== USER || user.password !== PASSWORD) {
        return res.sendStatus(400);
    }
    const PUBLIC = jwt.sign({ ...user, random }, SECRET, { expiresIn: "3y" });
    return res.json({ key: PUBLIC });
});
// Verify jwt
const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token)
        return res.sendStatus(401);
    jwt.verify(token, SECRET, (err) => {
        if (err)
            return res.sendStatus(403);
        next();
    });
};
// Single request handler for communication with third server APIs
app.get("/", authenticateToken, (req, res) => {
    res.send({ test: "done" });
});
// Create https server and start listening
const server = https.createServer(credentials, app);
server.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}.`);
});
