const express = require("express");
const mongoose = require("mongoose");
const HeroBannerRoutes = require("./Router/HeroBannerRoutes");
const authRoutes = require("./Router/authRoutes");
const councilCategory = require('./Router/CategoryCouncilRoutes')
const cors = require("cors")
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors({
  origin: "*",  // allows requests from any domain
  credentials: true, // optional: only needed if you use cookies or auth headers
}));
// Routes
app.use("/api/hero-banner", HeroBannerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/council", councilCategory);

module.exports = app;
