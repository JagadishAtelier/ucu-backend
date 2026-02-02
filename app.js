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
const consortiumRoutes = require("./Router/ConsortiumPageRoutes/consortiumRoutes");
const consortiumPillarRoutes = require("./Router/ConsortiumPageRoutes/consortiumPillarRoutes");
const consortiumTeamRoutes = require("./Router/ConsortiumPageRoutes/consortiumTeamRoutes");
const consortiumPartnerRoutes = require("./Router/ConsortiumPageRoutes/consortiumPartnerRoutes");
const openProgramRoutes = require("./Router/openProgramRoutes");
const summerProgramRoutes = require("./Router/summerProgramRoutes");
const summerProgramListRoutes = require("./Router/summerProgramListRoutes");
const executiveBannerRoutes = require("./Router/executiveRoutes/executiveBannerRoutes");
const executiveAreaRoutes = require("./Router/executiveRoutes/executiveAreaRoutes");
const executiveUpcommingProgramRoutes = require("./Router/executiveRoutes/executiveUpcommingProgramRoutes");
const excutiveImpactRoutes = require("./Router/executiveRoutes/excutiveImpactRoutes");
const ucuDirectorDataRoutes = require("./Router/ucuDirectorRoutes/ucuDirectorDataRoutes");
const facultyBannerRoutes = require("./Router/ucuDirectorRoutes/facultyBannerRoutes");
const partnershipCategoryRoutes = require("./Router/partnershipCategoryRouter/partnershipCategoryRoutes");
const partnershipBannerRoutes = require("./Router/partnershipCategoryRouter/partnershipBannerRoutes");
const CampusCommunityRoutes = require("./Router/CampusSecRouter/CampusCommunityRoutes");
const CampusExploreRoutes = require("./Router/CampusSecRouter/CampusExploreRoutes");
const CampusFacilitiesRoutes = require("./Router/CampusSecRouter/CampusFacilitiesRoutes");
const CampusGatewayRoutes = require("./Router/CampusSecRouter/CampusGatewayRoutes");
const CampusBannerRoutes = require("./Router/CampusSecRouter/CampusBannerRoutes");
const executiveStrategicRoutes = require("./Router/executiveRoutes/executiveStrategicRoutes");
const strategicInternationCollabRoutes = require("./Router/executiveRoutes/strategicInternationCollabRoutes");
const strategicCollabrationRoutes = require("./Router/executiveRoutes/strategicCollabrationRoutes");
const strategicAssociationsRoutes = require("./Router/executiveRoutes/strategicAssociationsRoutes");
const coeRoutes = require("./Router/executiveRoutes/coeRoutes");
const mediaRoutes = require("./Router/MediaRouter/mediaRoutes");
const mediaBannerRoutes = require("./Router/MediaRouter/mediaBannerRoutes");
const partnershipDataRoutes = require("./Router/partnershipCategoryRouter/partnershipDataRoutes");
const executiveIndividualsTabRoutes = require("./Router/executiveRoutes/executiveIndividualsTabRoutes");
const executiveIndividualsHelpFormRoutes = require("./Router/executiveRoutes/executiveIndividualsHelpFormRoutes");
const xelEnterpriseRoutes = require("./Router/executiveRoutes/xelEnterpriseRoutes");
const executivePhdTabRoutes = require("./Router/executiveRoutes/executivePhdTabRoutes");
const cxoAcademyRoutes = require("./Router/executiveRoutes/cxoAcademyRoutes");
const academicAccelatorRoutes = require("./Router/executiveRoutes/academicAccelatorRoutes");
const leadershipPhaseRoutes = require("./Router/executiveRoutes/leadershipPhaseRoutes");
const leadershipCoachingRoutes = require("./Router/executiveRoutes/leadershipCoachingRoutes");
const leadershipWhyChooseRoutes = require("./Router/executiveRoutes/leadershipWhyChooseRoutes");
const clientsProfileRoutes = require("./Router/executiveRoutes/clientsProfileRoutes");
const mdpsRoutes = require("./Router/executiveRoutes/mdpsRoutes");
const uploadRoutes = require("./Router/upload");
const admissionPageRoutes = require("./Router/AdmissionPageRoutes");

const onlineProgramBannerRoutes = require("./Router/OnlineProgram/onlineProgramBannerRoutes")
const onlineApplyRoutes = require("./Router/OnlineProgram/onlineApplyRoutes")
const onlineProgramBannerFormRoutes = require("./Router/OnlineProgram/onlineProgramBannerFormRoutes")
const onlineStatsRoutes = require("./Router/OnlineProgram/onlineStatsRoutes")
const onlineProgramApplyFormRoutes = require("./Router/OnlineProgram/onlineProgramApplyFormRoutes")
const applyOnlineFormPageRoutes = require("./Router/OnlineProgram/applyOnlineFormPageRoutes")

const campusPlacementIntroRoutes = require("./Router/CamPlacementRoutes/campusPlacementIntroRoutes")

const advisoryNavRoutes = require("./Router/AdvisoryNavigationRoutes");
const aboutRoutes = require("./Router/AboutRoutes"); // CMS Routes

const campusPlacementBatchRoutes = require("./Router/CamPlacementRoutes/campusPlacementBatchRoutes")
const exploreTalentRoutes = require("./Router/CamPlacementRoutes/exploreTalentRoutes")
const aboutRoutesLegacy = require("./Router/AboutRoutes/aboutRoutes") // Incoming Legacy Routes
const foundersMessageRoutes = require("./Router/AboutRoutes/foundersMessageRoutes")


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
app.use("/api/upload", uploadRoutes)
app.use("/api/hero-banner", HeroBannerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/council", councilCategory);
app.use("/api/aspirant", aspirant);
app.use("/api/council-adivsories", adivsoriesRoutes);
app.use("/api/advisory-navigation", advisoryNavRoutes);
app.use("/api/about", aboutRoutes); // Use CMS routes for /api/about
app.use("/api/about-legacy", aboutRoutesLegacy); // Keep legacy available
app.use("/api/fulltimeprograms", fullTimeProgramRoutes);
app.use("/api/industryIcons", industryIcons);
app.use("/api/upcommingEvent", upcommingEvent);
app.use("/api/consortium", consortiumRoutes);
app.use("/api/consortiumPillar", consortiumPillarRoutes);
app.use("/api/consortiumTeam", consortiumTeamRoutes);
app.use("/api/consortiumPartner", consortiumPartnerRoutes);
app.use("/api/openProgram", openProgramRoutes);
app.use("/api/summerProgramList", summerProgramListRoutes);
app.use("/api/executiveBanner", executiveBannerRoutes);
app.use("/api/executiveArea", executiveAreaRoutes);
app.use("/api/executiveUpcommingProgram", executiveUpcommingProgramRoutes);
app.use("/api/excutiveImpact", excutiveImpactRoutes);
app.use("/api/ucuDirectorData", ucuDirectorDataRoutes);
app.use("/api/facultyBanner", facultyBannerRoutes);
app.use("/api/partnershipData", partnershipDataRoutes);
app.use("/api/partnershipCategory", partnershipCategoryRoutes);
app.use("/api/partnershipBanner", partnershipBannerRoutes);
app.use("/api/CampusCommunity", CampusCommunityRoutes);
app.use("/api/CampusExplore", CampusExploreRoutes);
app.use("/api/CampusFacilities", CampusFacilitiesRoutes);
app.use("/api/CampusGateway", CampusGatewayRoutes);
app.use("/api/CampusBanner", CampusBannerRoutes);
app.use("/api/executiveStrategic", executiveStrategicRoutes);
app.use("/api/strategicInternationCollab", strategicInternationCollabRoutes);
app.use("/api/strategicCollabration", strategicCollabrationRoutes);
app.use("/api/strategicAssociations", strategicAssociationsRoutes);
app.use("/api/coe", coeRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/mediaBanner", mediaBannerRoutes);
app.use("/api/summerProgram", summerProgramRoutes);
app.use("/api/executiveIndividualsTab", executiveIndividualsTabRoutes);
app.use("/api/executiveIndividualsHelpForm", executiveIndividualsHelpFormRoutes);
app.use("/api/xelEnterprise", xelEnterpriseRoutes);
app.use("/api/executivePhdTab", executivePhdTabRoutes);
app.use("/api/cxoAcademy", cxoAcademyRoutes);
app.use("/api/academicAccelator", academicAccelatorRoutes);
app.use("/api/leadershipPhase", leadershipPhaseRoutes);
app.use("/api/leadershipCoaching", leadershipCoachingRoutes);
app.use("/api/leadershipWhyChoose", leadershipWhyChooseRoutes);
app.use("/api/clientsProfile", clientsProfileRoutes);
app.use("/api/mdps", mdpsRoutes);
app.use("/api/onlineProgramBanner", onlineProgramBannerRoutes);
app.use("/api/onlineApply", onlineApplyRoutes);
app.use("/api/onlineProgramBannerForm", onlineProgramBannerFormRoutes);
app.use("/api/onlineStats", onlineStatsRoutes);
app.use("/api/onlineProgramApplyForm", onlineProgramApplyFormRoutes);
app.use("/api/campusPlacementIntro", campusPlacementIntroRoutes);
app.use("/api/applyOnlineFormPage", applyOnlineFormPageRoutes);

app.use("/api/admissionPage", admissionPageRoutes);
app.use("/api/exploreTalent", exploreTalentRoutes);
app.use("/api/campusPlacementBatch", campusPlacementBatchRoutes);
app.use("/api/foundersMessage", foundersMessageRoutes);

module.exports = app;
