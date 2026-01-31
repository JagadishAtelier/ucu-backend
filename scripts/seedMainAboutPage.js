require('dotenv').config({ path: '../.env' }); // Adjust path if needed or run from backend root
const mongoose = require('mongoose');
const AboutNavigation = require('../Model/AboutNavigation');
const AboutPageData = require('../Model/AboutPageData');

const seedData = async () => {
    try {
        await mongoose.connect("mongodb+srv://jagadishatelier_db_user:OnoFWwK10JtWq81w@UCU.rwvbotd.mongodb.net/?retryWrites=true&w=majority&appName=UCU");
        console.log("Connected to MongoDB");

        const slug = 'main-about-ucu';
        const title = 'Main About UCU';

        // 1. Create Navigation Entry if not exists
        let nav = await AboutNavigation.findOne({ slug });
        if (!nav) {
            nav = await AboutNavigation.create({
                title,
                slug,
                order: -1 // Hidden or top
            });
            console.log("Created Navigation entry for Main About UCU");
        } else {
            console.log("Navigation entry already exists");
        }

        // 2. Prepare Page Data
        const pageData = {
            pageSlug: slug,
            title: "About UCU",
            bannerImage: "https://img.freepik.com/free-photo/front-view-people-meeting-cup-coffee_23-2148817096.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
            description: "Universal Corporate University (UCU) was founded with a vision to redefine management education by bridging academia and industry. Our innovative programs are designed to equip aspiring leaders with knowledge, skills, and values that drive meaningful impact across industries and geographies.",
            sections: [
                // Section 0: Story Heading
                {
                    type: "content",
                    heading: `Reimagining <span style="color:#5ac501"> Business Education</span> for a Borderless, Industry-Driven, AI-Empowered Future`,
                    content: "",
                    image: ""
                },
                // Section 1: Vision
                {
                    type: "vision",
                    heading: "Vision",
                    content: `To be a globally recognised force in business education—democratising access, 
    bridging rural-urban divides, and empowering learners and educators through a curriculum 
    co-created and delivered by industry leaders and corporate practitioners, within a lifelong 
    learning ecosystem that redefines global teaching standards and prepares agile talent for 
    the future of work.`,
                    image: ""
                },
                // Section 2: Mission
                {
                    type: "mission",
                    heading: "Mission",
                    content: `<ul class="mission-list text-lg-justify">
          <li class="mb-2">
            To co-create and co-deliver cutting-edge, contemporary, and
            future-ready curricula in active collaboration with industry
            leaders, ensuring every learning experience is rooted in enterprise
            relevance and designed for real-world impact.
          </li>
          <li class="mb-2">
            To equip MBA aspirants and professionals with the skills and
            knowledge required to excel in a competitive business landscape.
          </li>
          <li class="mb-2">
            To accelerate academic transformation across partner institutions by
            empowering their faculty through development programs co-created and
            delivered with UCU’s expansive industry network—driving measurable
            upliftment in teaching outcomes and institutional performance.
          </li>
          <li class="mb-2">
            To champion inclusive education by leveraging advanced digital
            platforms that connect rural and urban learners to high-quality
            business education—unlocking potential, accelerating growth, and
            fostering a more equitable talent landscape.
          </li>
        </ul>`,
                    image: ""
                },
                // Timeline Sections
                {
                    type: "timeline",
                    heading: "<span>1990 – 2009</span> : Vision Realised",
                    content: `This journey is the life’s work of our Founder & Chairman, <strong>Dr. M. Balaji (Bala)</strong>.
        It began at the <strong>Ahmedabad Management Association (AMA)</strong>, founded by Dr. Vikram Sarabhai,
        the father of India’s space program, where Dr. Balaji was part of the founding team.<br /><br />
        
        He played a pivotal role in transforming a modest 3,000 sq. ft. facility into a world-class
        30,000 sq. ft. management complex, located opposite IIM Ahmedabad. Under his leadership, AMA established
        <strong>32 Centers of Excellence</strong>, mobilized <strong>₹3.5 crores in funding</strong>, launched over a dozen functional diploma programs,
        and hosted more than <strong>5,000 Management Development Programs</strong> and <strong>2,500+ CXO talks</strong>.<br /><br />
        
        These milestones laid the foundation for his deep expertise in corporate and executive education ecosystems.`,
                    gallery: [
                        "/abt-story-1.jpeg", "/abt-story-2.jpeg", "/abt-story-3.jpeg", "/abt-story-4.jpeg", "/abt-story-5.jpeg",
                        "https://amaindia.b-cdn.net/amain/wp-content/uploads/2019/05/Facilities2.jpg",
                        "https://amaindia.b-cdn.net/amain/wp-content/uploads/2019/05/Facilities4.gif",
                        "https://amaindia.b-cdn.net/amain/wp-content/uploads/2025/07/HT-Parekh-Convention-Center-03.jpeg",
                        "https://amaindia.b-cdn.net/amain/wp-content/uploads/2022/06/DSC_1058.jpg",
                        "https://amaindia.b-cdn.net/amain/wp-content/uploads/2019/05/Facilities5.jpg"
                    ]
                },
                {
                    type: "timeline",
                    heading: "<span>2009 – 2026</span> : Building Launchpad for Global Careers",
                    content: `Dr. Bala carried his vision forward to <strong>Great Lakes Institute of Management</strong>, where he served
        for over 15 years and played a pivotal role in shaping its corporate engagement strategy.<br /><br />

        He built a robust campus placement engine that successfully placed over <strong>8,000 students</strong> and supported
        more than <strong>1,000 MBA graduates annually</strong>. His pioneering contributions included conceptualizing and hosting a series
        of innovative conferences and conventions across emerging and diverse industry sectors, launching India’s first
        <strong>Product Management program</strong> in collaboration with PayPal, and establishing the <strong>Placement Academy for Career Enhancement (PACE)</strong>,
        a strategic initiative designed to bridge the gap between academic curricula and industry expectations.<br /><br />

        He also founded one of India’s most distinguished student-led placement committees, <strong>PlaceCom</strong>,
        which identified and nurtured over <strong>1,000 high-caliber individuals</strong>. This initiative evolved into a leadership development
        platform, producing fast-track talent now serving in global corporations such as <strong>Apple, Google, McKinsey, Facebook,
        PayPal, BCG, Bain, Amazon, Microsoft</strong>, and many others.<br /><br />

        Under his stewardship, the institute’s average campus CTC increased more than sevenfold within a decade,
        reflecting the transformative impact of his leadership.`,
                    gallery: ["/historyImages/2.jpg", "/historyImages/3.jpg", "/historyImages/1.jpg", "histroy-5.jpg", "histroy-7.jpg", "histroy-8.jpg", "/historyImages/5.jpg", "/historyImages/6.jpg", "/historyImages/4.jpg", "histroy-6.jpg", "/abt-story-6.jpeg"]
                },
                {
                    type: "timeline",
                    heading: "<span>2026 – Present</span> : Birth of Universal Corporate University (UCU) - Building what's next",
                    content: `Throughout his career, Dr. Bala keenly observed the widening disconnect between what was taught in business schools
        and what the industry truly needed — an issue magnified by the rise of AI and rapid technological change.<br /><br />

        Recognizing this gap, he united a committed group of industry leaders and alumni to build something transformative,
        not just for learners, but also for educators.<br /><br />

        Through lifelong learning and skill-building initiatives, <strong>UCU</strong> empowers academic institutions to become market-ready,
        enabling faculty to deliver industry-aligned education that produces better outcomes.<br /><br />

        Thus, <strong>UCU was born</strong>, a direct response to the market’s demand for relevant, rigorous, and results-driven corporate education.
        UCU’s foundation is a testament to what happens when vision meets execution, and when education is reimagined for the future of work.<br /><br />

        UCU is the <strong>living legacy</strong> of a leader who dedicated his career to aligning talent with enterprise expectations.
        Every program is engineered for genuine impact, empowering learners to become agile, future-ready business leaders.`,
                    gallery: ["/timeline-logo2.png", "https://img.freepik.com/free-photo/shanghai-waitan_649448-3038.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80", "https://img.freepik.com/free-photo/modern-amphitheater-usa_1268-14358.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80", "https://img.freepik.com/premium-photo/aerial-drone-shot-waverly-hills-sanatorium-louisville-kentucky_665346-46385.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"]
                },
                // Stat Sections
                {
                    type: "stat",
                    heading: "30",
                    subHeading: "+ Years",
                    content: "Of leadership experience shaping business education and transforming learning journeys worldwide."
                },
                {
                    type: "stat",
                    heading: "12000",
                    subHeading: "+",
                    content: "Global alumni network blending international insight with local excellence and strong industry links."
                },
                {
                    type: "stat",
                    heading: "200",
                    subHeading: "+",
                    content: "SMEs and industry practitioners driving UCU’s growth and fostering impactful corporate learning."
                },
                {
                    type: "stat",
                    heading: "100",
                    subHeading: "+",
                    content: "Eminent global professors advancing UCU’s academic excellence and inspiring next-gen leaders."
                }
            ]
        };

        // 3. Update or Create Page Data
        await AboutPageData.findOneAndUpdate(
            { pageSlug: slug },
            pageData,
            { upsert: true, new: true }
        );

        console.log("Seeded Main About Page API Data successfully.");
        process.exit(0);

    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
};

seedData();
