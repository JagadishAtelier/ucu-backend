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

        const AboutPageData = require('../Model/AboutPageData');
        const AboutNavigation = require('../Model/AboutNavigation');

        // --- Main About UCU Page ---
        console.log("Seeding Main About UCU Page...");
        const mainAboutData = {
            pageSlug: "main-about-ucu",
            title: "About UCU",
            bannerImage: "https://img.freepik.com/free-photo/front-view-people-meeting-cup-coffee_23-2148817096.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
            description: "Universal Corporate University (UCU) was founded with a vision to redefine management education by bridging academia and industry.",
            sections: [
                // Story
                {
                    type: "content",
                    heading: `Reimagining <span style="color: #5ac501"> Business Education</span> for a Borderless, Industry-Driven, AI-Empowered Future`,
                    content: "Universal Corporate University (UCU) was founded with a vision to redefine management education by bridging academia and industry. Our innovative programs are designed to equip aspiring leaders with knowledge, skills, and values that drive meaningful impact across industries and geographies."
                },
                // Vision
                {
                    type: "vision",
                    heading: "Vision",
                    content: "To be a globally recognised force in business education—democratising access, bridging rural-urban divides, and empowering learners and educators through a curriculum co-created and delivered by industry leaders and corporate practitioners, within a lifelong learning ecosystem that redefines global teaching standards and prepares agile talent for the future of work.",
                    image: "https://ucu-imgs.s3.ap-south-1.amazonaws.com/vision_image1.jpg"
                },
                // Mission
                {
                    type: "mission",
                    heading: "Mission",
                    content: `<ul class="mission-list text-lg-justify">
                        <li class="mb-2">To co-create and co-deliver cutting-edge, contemporary, and future-ready curricula in active collaboration with industry leaders, ensuring every learning experience is rooted in enterprise relevance and designed for real-world impact.</li>
                        <li class="mb-2">To equip MBA aspirants and professionals with the skills and knowledge required to excel in a competitive business landscape.</li>
                        <li class="mb-2">To accelerate academic transformation across partner institutions by empowering their faculty through development programs co-created and delivered with UCU’s expansive industry network—driving measurable upliftment in teaching outcomes and institutional performance.</li>
                        <li class="mb-2">To champion inclusive education by leveraging advanced digital platforms that connect rural and urban learners to high-quality business education—unlocking potential, accelerating growth, and fostering a more equitable talent landscape.</li>
                    </ul>`
                },
                // Timeline
                {
                    type: "timeline",
                    heading: "<span>1990 – 2009</span> : Vision Realised",
                    content: "This journey is the life’s work of our Founder & Chairman, <strong>Dr. M. Balaji (Bala)</strong>. It began at the <strong>Ahmedabad Management Association (AMA)</strong>, founded by Dr. Vikram Sarabhai, the father of India’s space program, where Dr. Balaji was part of the founding team.<br/><br/>He played a pivotal role in transforming a modest 3,000 sq. ft. facility into a world-class 30,000 sq. ft. management complex, located opposite IIM Ahmedabad. Under his leadership, AMA established <strong>32 Centers of Excellence</strong>, mobilized <strong>₹3.5 crores in funding</strong>, launched over a dozen functional diploma programs, and hosted more than <strong>5,000 Management Development Programs</strong> and <strong>2,500+ CXO talks</strong>.<br/><br/>These milestones laid the foundation for his deep expertise in corporate and executive education ecosystems.",
                    gallery: [
                        "https://ucu-imgs.s3.ap-south-1.amazonaws.com/about-page-images/image-1.jpg",
                        "https://ucu-imgs.s3.ap-south-1.amazonaws.com/about-page-images/image-2.jpg",
                        "https://amaindia.b-cdn.net/amain/wp-content/uploads/2019/05/Facilities2.jpg",
                        "https://amaindia.b-cdn.net/amain/wp-content/uploads/2019/05/Facilities4.gif",
                        "https://amaindia.b-cdn.net/amain/wp-content/uploads/2022/06/DSC_1058.jpg",
                        "https://amaindia.b-cdn.net/amain/wp-content/uploads/2019/05/Facilities5.jpg"
                    ]
                },
                {
                    type: "timeline",
                    heading: "<span>2009 – 2026</span> : Building Launchpad for Global Careers",
                    content: "Dr. Bala carried his vision forward to <strong>Great Lakes Institute of Management</strong>, where he served for over 15 years and played a pivotal role in shaping its corporate engagement strategy.<br/><br/>He built a robust campus placement engine that successfully placed over <strong>8,000 students</strong> and supported more than <strong>1,000 MBA graduates annually</strong>. His pioneering contributions included conceptualizing and hosting a series of innovative conferences and conventions across emerging and diverse industry sectors, launching India’s first <strong>Product Management program</strong> in collaboration with PayPal, and establishing the <strong>Placement Academy for Career Enhancement (PACE)</strong>, a strategic initiative designed to bridge the gap between academic curricula and industry expectations.<br/><br/>He also founded one of India’s most distinguished student-led placement committees, <strong>PlaceCom</strong>, which identified and nurtured over <strong>1,000 high-caliber individuals</strong>. This initiative evolved into a leadership development platform, producing fast-track talent now serving in global corporations such as <strong>Apple, Google, McKinsey, Facebook, PayPal, BCG, Bain, Amazon, Microsoft</strong>, and many others.<br/><br/>Under his stewardship, the institute’s average campus CTC increased more than sevenfold within a decade, reflecting the transformative impact of his leadership.<br/><br/>",
                    gallery: [
                        "https://ucu-imgs.s3.ap-south-1.amazonaws.com/historyImages/2.jpg",
                        "https://ucu-imgs.s3.ap-south-1.amazonaws.com/historyImages/3.jpg",
                        "https://ucu-imgs.s3.ap-south-1.amazonaws.com/historyImages/1.jpg",
                        "https://ucu-imgs.s3.ap-south-1.amazonaws.com/historyImages/5.jpg",
                        "https://ucu-imgs.s3.ap-south-1.amazonaws.com/historyImages/6.jpg",
                        "https://ucu-imgs.s3.ap-south-1.amazonaws.com/historyImages/4.jpg"
                    ]
                },
                {
                    type: "timeline",
                    heading: "<span>2026 – Present</span> : Birth of Universal Corporate University (UCU) - Building what's next",
                    content: "Throughout his career, Dr. Bala keenly observed the widening disconnect between what was taught in business schools and what the industry truly needed — an issue magnified by the rise of AI and rapid technological change.<br/><br/>Recognizing this gap, he united a committed group of industry leaders and alumni to build something transformative, not just for learners, but also for educators.<br/><br/>Through lifelong learning and skill-building initiatives, <strong>UCU</strong> empowers academic institutions to become market-ready, enabling faculty to deliver industry-aligned education that produces better outcomes.<br/><br/>Thus, <strong>UCU was born</strong>, a direct response to the market’s demand for relevant, rigorous, and results-driven corporate education. UCU’s foundation is a testament to what happens when vision meets execution, and when education is reimagined for the future of work.<br/><br/>UCU is the <strong>living legacy</strong> of a leader who dedicated his career to aligning talent with enterprise expectations. Every program is engineered for genuine impact, empowering learners to become agile, future-ready business leaders.",
                    gallery: [
                        "https://ucu-imgs.s3.ap-south-1.amazonaws.com/timeline-logo2.png",
                        "https://img.freepik.com/free-photo/shanghai-waitan_649448-3038.jpg",
                        "https://img.freepik.com/free-photo/modern-amphitheater-usa_1268-14358.jpg"
                    ]
                },
                // Stats
                { type: "stat", heading: "30", subHeading: "+ Years", content: "Of leadership experience shaping business education and transforming learning journeys worldwide." },
                { type: "stat", heading: "12000", subHeading: "+", content: "Global alumni network blending international insight with local excellence and strong industry links." },
                { type: "stat", heading: "200", subHeading: "+", content: "SMEs and industry practitioners driving UCU’s growth and fostering impactful corporate learning." },
                { type: "stat", heading: "100", subHeading: "+", content: "Eminent global professors advancing UCU’s academic excellence and inspiring next-gen leaders." }
            ]
        };

        await AboutPageData.findOneAndUpdate(
            { pageSlug: "main-about-ucu" },
            mainAboutData,
            { upsert: true, new: true }
        );

        // Ensure navigation exists for main page (optional, but good for completeness)
        await AboutNavigation.findOneAndUpdate(
            { slug: "main-about-ucu" },
            { title: "About UCU", slug: "main-about-ucu", order: 0 },
            { upsert: true, new: true }
        );

        console.log("Main About UCU Page Processed.");

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
