import express from "express";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());


export default app;