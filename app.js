const express = require("express");
const mongoose = require("mongoose");
const HeroBannerRoutes = require("./Router/HeroBannerRoutes");
const authRoutes = require("./Router/authRoutes");
const councilCategory = require('./Router/CategoryCouncilRoutes')
const adivsoriesRoutes = require('./Router/AdivsoriesRoutes')
const aspirant = require('./Router/AspirantRouter')
const industryIcons = require('./Router/IndustryIconsRoutes')
const upcommingEvent = require('./Router/EventRoutes')
const fullTimeProgramRoutes = require("./Router/fullTimeProgramRoutes");
const consortiumRoutes= require("./Router/consortiumRoutes");
const consortiumPillarRoutes= require("./Router/consortiumPillarRoutes");
const consortiumTeamRoutes= require("./Router/consortiumTeamRoutes");
const consortiumPartnerRoutes= require("./Router/consortiumPartnerRoutes");
const openProgramRoutes = require("./Router/openProgramRoutes");
const summerProgramRoutes= require("./Router/summerProgramRoutes");
const summerProgramListRoutes = require("./Router/summerProgramListRoutes");
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
app.use("/api/upcommingEvent", upcommingEvent);
app.use("/api/consortium", consortiumRoutes);
app.use("/api/consortiumPillar", consortiumPillarRoutes );
app.use("/api/consortiumTeam", consortiumTeamRoutes  );
app.use("/api/consortiumPartner", consortiumPartnerRoutes);
app.use("/api/openProgram", openProgramRoutes);
app.use("/api/summerProgramList", summerProgramListRoutes );

module.exports = app;
