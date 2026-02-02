const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });

const LeadershipPage = require('../Model/AboutModel/LeadershipPageModel');
const IndustryApproachPage = require('../Model/AboutModel/IndustryApproachPageModel');
const FounderMessagePage = require('../Model/AboutModel/FounderMessagePageModel');

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        // --- Leadership Page ---
        console.log("Seeding Leadership Page...");
        const leadershipData = {
            title: "Leadership",
            slug: "leadership",
            founderName: "Dr. M Balaji (BALA)",
            founderTitle: "Founder & Chairman",
            founderDescription: "At UCU, leadership is not defined by titles but by the ability to shape ecosystems, inspire progress, and create meaningful change. The Leadership Consortium was built on this belief. More than a platform, it is a dynamic space where influential minds—academicians, industry leaders, and aspiring professionals—come together to elevate capability and character.",
            founderImage: "https://ucu-imgs.s3.ap-south-1.amazonaws.com/founder.jpg",
            leadershipTeams: [{
                title: "Meet our leadership team.",
                members: [
                    { name: "Aneel Bhusri", designation: "Co-Founder and Executive Chair", image: "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" },
                    { name: "Dave Duffield", designation: "Co-Founder and CEO Emeritus", image: "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" },
                    { name: "Carl Eschenbach", designation: "Co-Founder and Executive Chair", image: "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" },
                    { name: "Peter Bailis", designation: "Co-Founder and Executive Chair", image: "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" },
                    { name: "Patrick Blair", designation: "Co-Founder and Executive Chair", image: "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" },
                    { name: "Emma Chalwin", designation: "Co-Founder and Executive Chair", image: "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" },
                    { name: "Rob Enslin", designation: "Co-Founder and Executive Chair", image: "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" }
                ]
            }]
        };

        // --- Leadership Page ---
        console.log("Seeding/Updating Leadership Page...");
        await LeadershipPage.findOneAndUpdate(
            { slug: leadershipData.slug },
            leadershipData,
            { upsert: true, new: true }
        );
        console.log("Leadership Page Processed.");

        // --- Industry Approach Page ---
        console.log("Seeding/Updating Industry Approach Page...");
        const industryData = {
            title: "Industry Approach",
            slug: "industry-approach",
            heroTitle: "Industry Approach",
            contentTitle: "Industry Aligned. Leadership Driven.",
            contentDescription: "UCU is built on a simple belief: education must move at the speed of industry. Every program is engineered with corporate leaders to create future-ready professionals.",
            features: [
                { icon: "Rocket", title: "Industry First. Future Ready. Always.", description: "At Universal Corporate University (UCU), Chennai, we don’t just follow industry trends — we set them. Our programs are engineered for the boardroom, built with the boardroom, and benchmarked against global best practices." },
                { icon: "Timer", title: "Strategy Powered by 100+ CXOs", description: "Our Business Advisory Council, HR Leadership Panels (CHROs, TA Heads, L&D Experts), and Young CXO Council bring together over 100 top-tier industry leaders from global MNCs. These visionaries co-create UCU’s curriculum, ensuring every module is a direct response to what the market demands." },
                { icon: "GraduationCap", title: "Faculty of Titans", description: "UCU’s Professors of Practice and industry trainers hail from the world’s most respected firms in Consulting, Finance, Product Management, and Technology. They don’t just teach — they transfer wisdom, war stories, and winning strategies." },
                { icon: "BadgeCheck", title: "Day-Zero Industry Readiness", description: "Our learners don’t wait to be industry-ready — they arrive that way. Every program is infused with real-world simulations, case-led learning, and leadership grooming, ensuring fresh graduates hit the ground sprinting and experienced professionals ascend to strategic roles." },
                { icon: "Target", title: "Sector-Specific Leadership Tracks", description: "Whether it’s FinTech, Mobility, Sustainability, BFSI, IT/ITES, Manufacturing, Consulting, Data & Analytics, or Semiconductors — our curated programs are precision-built to meet the leadership needs of tomorrow’s enterprises." },
                { icon: "TestTube2", title: "Faculty Certification with Corporate DNA", description: "UCU’s pioneering Faculty Certification initiative reimagines academic excellence by blending traditional pedagogy with corporate acumen. We certify educators to teach with the pulse of the industry — not just the pages of a textbook." },
                { icon: "RefreshCcw", title: "Continuous Learning for Continuous Relevance", description: "For working professionals, UCU is a lifelong partner. Our executive learning modules ensure you stay ahead of the curve — with the latest tools, trends, and transformations shaping your sector." },
                { icon: "Users", title: "CXO Academy", description: "Tailored boardroom-ready programs for every C‑suite role — build strategic acumen, governance mastery, and enterprise impact." },
                { icon: "Building2", title: "Leadership Coach", description: "A one‑on‑one coaching journey that transforms senior leaders through diagnostics, bespoke plans, and measurable outcomes." }
            ]
        };

        await IndustryApproachPage.findOneAndUpdate(
            { slug: industryData.slug },
            industryData,
            { upsert: true, new: true }
        );
        console.log("Industry Approach Page Processed.");

        // --- Founder Message Page ---
        console.log("Seeding/Updating Founder Message Page...");
        const founderMessageData = {
            title: "Founders Messages",
            slug: "founders-messages",
            heading: "Message from the Founder & Chairman",
            founderName: "Dr. M. Balaji (Bala)",
            founderTitle: "Founder & Chairman",
            founderOrg: "Universal Corporate University",
            founderImage: "https://ucu-imgs.s3.ap-south-1.amazonaws.com/founder.jpg",
            signatureName: "Dr. M. Balaji (Bala)",
            signatureTitle: "Founder & Chairman",
            signatureOrg: "Universal Corporate University, Chennai",
            messageContent: [
                { type: "paragraph", children: [{ text: "Dear Stakeholders," }] },
                { type: "paragraph", children: [{ text: "It is with immense pride that I welcome you to " }, { text: "Universal Corporate University (UCU)", bold: true }, { text: ", a pioneering institution with a bold mission to democratize access to high-quality business education and cultivate a future-ready talent pipeline aligned with the dynamic needs of global corporations." }] },
                { type: "paragraph", children: [{ text: "India stands today as a beacon of intellectual capital, increasingly recognized by global organizations as a premier hub for skilled professionals. UCU was founded to meet this growing demand, not only by " }, { text: "nurturing exceptional talent but also by strengthening academic institutions through rigorous Faculty Development Programs, powered by a diverse network of industry leaders.", bold: true }] },
                { type: "paragraph", children: [{ text: "With over 35 years of experience bridging academia and industry, I have witnessed first-hand the widening gap between traditional education and corporate expectations. After decades of building learning ecosystems, placing more than seven thousand students, and shaping talent pipelines across India’s top institutions, it became clear that business education must evolve from theoretical abstraction to industrial relevance." }] },
                { type: "paragraph", children: [{ text: "UCU was born from this conviction, a university forged not in ivory towers, but in boardrooms, CXO conclaves, and the crucible of real-world leadership. Our curriculum is co-authored by over 100+ CXOs and HR leaders, delivered by seasoned practitioners from global MNCs, and designed to ensure day-zero readiness and long-term leadership. Whether you're a fresh graduate or a seasoned professional, UCU is where ambition meets enterprise expectations. We don’t just teach business—we build business leaders." }] },
                { type: "paragraph", children: [{ text: "Our commitment to inclusivity drives us to connect rural colleges to our digital platforms, ensuring that students across India, regardless of geography, can access the same high-quality learning experiences as their urban counterparts. We believe education must be dynamic, inclusive, and responsive to rapid technological and market shifts." }] },
                { type: "paragraph", children: [{ text: "Beyond traditional education, UCU offers executive learning and continuous upskilling programs that empower professionals and organizations to stay competitive in an ever-evolving landscape. We are dedicated to fostering innovation, critical thinking, and adaptability, qualities essential for leadership across sectors. Above all, we stand for accessible education that breaks economic barriers and nurtures a vibrant ecosystem where talent thrives and meets industry needs with precision and excellence." }] },
                { type: "paragraph", children: [{ text: "As India steps into its next economic chapter, UCU is proud to lead the way, one industry-aligned learner at a time. I invite you to join us in this transformative journey. Together, let us shape the leaders who will drive innovation, prosperity, and positive change in the years to come." }] }
            ]
        };
        founderMessageData.messageContent = JSON.stringify(founderMessageData.messageContent);

        await FounderMessagePage.findOneAndUpdate(
            { slug: founderMessageData.slug },
            founderMessageData,
            { upsert: true, new: true }
        );
        console.log("Founder Message Page Processed.");

        console.log("Seeding Completed Successfully.");
        process.exit(0);

    } catch (error) {
        console.error("Seeding Failed:", error);
        process.exit(1);
    }
};

seedData();
