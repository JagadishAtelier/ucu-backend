const express = require("express");
const mongoose = require("mongoose");
const HeroBannerRoutes = require("./Router/HeroBannerRoutes");
const authRoutes = require("./Router/authRoutes");
const councilCategory = require('./Router/CategoryCouncilRoutes')
const adivsoriesRoutes = require('./Router/AdivsoriesRoutes')
const aspirant = require('./Router/AspirantRouter')
const industryIcons = require('./Router/IndustryIconsRoutes')
const fullTimeProgramRoutes = require("./Router/fullTimeProgramRoutes");
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
app.use("/api/aspirant", aspirant);
app.use("/api/council-adivsories", adivsoriesRoutes);
app.use("/api/fulltimeprograms", fullTimeProgramRoutes);
app.use("/api/industryIcons", industryIcons);

module.exports = app;
