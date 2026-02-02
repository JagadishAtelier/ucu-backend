
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { join } = require('path');

// Load env vars
dotenv.config({ path: join(__dirname, '../.env') });

const AboutPageDataSchema = new mongoose.Schema({
    pageSlug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    bannerImage: { type: String },
    description: { type: String },
    sections: [{
        heading: { type: String },
        subHeading: { type: String },
        content: { type: String },
        image: { type: String },
        gallery: [{ type: String }],
        type: { type: String, default: 'content' }
    }]
}, { timestamps: true });

const AboutPageData = mongoose.model('AboutPageData', AboutPageDataSchema);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const seedData = async () => {
    await connectDB();

    console.log("Clearing existing About Page Data...");
    await AboutPageData.deleteMany({});

    const pages = [
        {
            pageSlug: 'main-about-ucu',
            title: 'About <span style="color: #5ac501;">UCU</span>',
            bannerImage: 'https://img.freepik.com/free-photo/front-view-people-meeting-cup-coffee_23-2148817096.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80',
            description: `Universal Corporate University (UCU) is not just an educational institution; it is a movement. A movement to bridge the chasm between academic learning and corporate reality.

            We are building a future where education is industry-integrated, skills are currency, and every learner is a leader in the making.`,
            sections: [
                {
                    type: 'content',
                    heading: 'Our Story',
                    content: `<strong>The Gap Between Education & Employability</strong><br><br>
                    For decades, the world of education and the world of business have operated in silos. Students graduate with degrees but often lack the practical skills, strategic mindset, and adaptability that modern industries demand.<br><br>
                    <strong>Universal Corporate University</strong> was born to close this gap.`
                },
                {
                    type: 'vision',
                    heading: 'Our Vision',
                    content: 'To be the global benchmark for industry-integrated education, creating a borderless ecosystem where knowledge meets application.',
                    image: 'https://img.freepik.com/free-photo/vision-mission-values-business-strategy-concept_53876-139700.jpg'
                },
                {
                    type: 'mission',
                    heading: 'Our Mission',
                    content: 'To empower 1 million learners by 2030 with future-ready skills, fostering innovation, leadership, and sustainable growth through corporate-academia synergy.'
                },
                // Timeline
                {
                    type: 'timeline',
                    heading: '1990 – 2009',
                    content: '<strong>Vision Realised</strong><br>This journey is the life’s work of our Founder & Chairman, Dr. M. Balaji (Bala). It began at the Ahmedabad Management Association (AMA)...',
                    gallery: ["https://amaindia.b-cdn.net/amain/wp-content/uploads/2019/05/Facilities2.jpg", "https://amaindia.b-cdn.net/amain/wp-content/uploads/2019/05/Facilities4.gif"]
                },
                {
                    type: 'timeline',
                    heading: '2009 – 2026',
                    content: '<strong>Building Launchpad for Global Careers</strong><br>Dr. Bala carried his vision forward to Great Lakes Institute of Management...',
                    gallery: ["https://img.freepik.com/free-photo/business-people-shaking-hands-meeting_53876-103632.jpg", "/historyImages/1.jpg"]
                },
                {
                    type: 'timeline',
                    heading: '2026 – Present',
                    content: '<strong>Birth of Universal Corporate University (UCU)</strong><br>Recognizing the gap, he united a committed group of industry leaders...',
                    gallery: ["/timeline-logo2.png", "https://img.freepik.com/free-photo/modern-amphitheater-usa_1268-14358.jpg"]
                },
                // Stats
                { type: 'stat', heading: '30', subHeading: '+ Years', content: 'Of leadership experience shaping business education.' },
                { type: 'stat', heading: '12000', subHeading: '+', content: 'Global alumni network.' },
                { type: 'stat', heading: '200', subHeading: '+', content: 'SMEs and industry practitioners.' },
                { type: 'stat', heading: '100', subHeading: '+', content: 'Eminent global professors.' },

                // New Sections (Brand, Tour, Graduation)
                {
                    type: 'brand_logos',
                    heading: 'Our Corporate Partners',
                    content: 'We collaborate with industry giants.',
                    gallery: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Infosys_logo.svg/2560px-Infosys_logo.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wipro_Logo_new.svg/2560px-Wipro_Logo_new.svg.png'
                    ]
                },
                {
                    type: 'content',
                    heading: 'Graduation',
                    content: 'Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.',
                    image: 'https://img.freepik.com/free-photo/graduates-throwing-hats-air_53876-123456.jpg'
                },
                {
                    type: 'content',
                    heading: 'Special Campus Tour',
                    content: 'Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, students and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what is the best for you.',
                    image: 'https://img.freepik.com/free-photo/university-campus-tour-students_53876-654321.jpg'
                }
            ]
        },
        {
            pageSlug: 'founder-message',
            title: 'Message from the <span style="color:#5ac501">Founder & Chairman</span>',
            bannerImage: '/founder.jpg',
            description: '',
            sections: [
                {
                    type: 'founder_profile',
                    heading: 'Dr. M. Balaji (Bala)',
                    subHeading: 'Founder & Chairman, Universal Corporate University',
                    content: 'Dr. Bala is a visionary leader with over 35 years of experience bridging academia and industry.',
                    image: '/founder.jpg'
                },
                {
                    type: 'content',
                    heading: 'Dear Stakeholders,',
                    content: `It is with immense pride that I welcome you to <strong>Universal Corporate University (UCU)</strong>, a pioneering institution with a bold mission...<br><br>
                    India stands today as a beacon of intellectual capital...<br><br>
                    UCU was born from this conviction...<br><br>
                    Warm regards,<br>
                    <strong>Dr. M. Balaji (Bala)</strong>`
                }
            ]
        },
        {
            pageSlug: 'leader-ship',
            title: 'Our <span style="color:#5ac501">Leadership</span>',
            bannerImage: 'https://img.freepik.com/free-photo/business-people-meeting-office_53876-103632.jpg',
            description: 'At UCU, leadership is not defined by titles but by the ability to shape ecosystems, inspire progress, and create meaningful change.',
            sections: [
                {
                    type: 'founder_profile',
                    heading: 'Dr. M Balaji (BALA)',
                    subHeading: 'Founder & Chairman, UCU Chennai & CEO, UCU Consortium',
                    content: 'The Leadership Consortium was built on this belief. More than a platform, it is a dynamic space where influential minds come together.',
                    image: '/founder.jpg'
                },
                // Team Members
                { type: 'team_member', heading: 'Aneel Bhusri', subHeading: 'Co-Founder and Executive Chair', image: 'https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png' },
                { type: 'team_member', heading: 'Dave Duffield', subHeading: 'Co-Founder and CEO Emeritus', image: 'https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png' },
                { type: 'team_member', heading: 'Carl Eschenbach', subHeading: 'Co-Founder and Executive Chair', image: 'https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png' },
                { type: 'team_member', heading: 'Peter Bailis', subHeading: 'Co-Founder and Executive Chair', image: 'https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png' },
                // ... adding a few more for demo
                { type: 'team_member', heading: 'Patrick Blair', subHeading: 'Co-Founder and Executive Chair', image: 'https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png' },
                { type: 'team_member', heading: 'Emma Chalwin', subHeading: 'Co-Founder and Executive Chair', image: 'https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png' }
            ]
        },
        {
            pageSlug: 'industry-approach',
            title: 'Industry <span style="color:#5ac501">Approach</span>',
            bannerImage: 'https://img.freepik.com/premium-photo/communication-feedback-chos-role_1077802-145596.jpg',
            description: 'UCU is built on a simple belief: education must move at the speed of industry.',
            sections: [
                {
                    type: 'feature',
                    heading: 'Industry First. Future Ready. Always.',
                    content: 'At Universal Corporate University (UCU), Chennai, we don’t just follow industry trends — we set them.',
                    image: ''
                },
                {
                    type: 'feature',
                    heading: 'Strategy Powered by 100+ CXOs',
                    content: 'Our Business Advisory Council, HR Leadership Panels (CHROs, TA Heads, L&D Experts), and Young CXO Council bring together over 100 top-tier industry leaders.',
                    image: ''
                },
                {
                    type: 'feature',
                    heading: 'Faculty of Titans',
                    content: 'UCU’s Professors of Practice and industry trainers hail from the world’s most respected firms in Consulting, Finance, Product Management, and Technology.',
                    image: ''
                },
                {
                    type: 'feature',
                    heading: 'Day-Zero Industry Readiness',
                    content: 'Our learners don’t wait to be industry-ready — they arrive that way.',
                    image: ''
                },
                {
                    type: 'feature',
                    heading: 'Sector-Specific Leadership Tracks',
                    content: 'Whether it’s FinTech, Mobility, Sustainability, BFSI, IT/ITES, Manufacturing, Consulting, Data & Analytics, or Semiconductors.',
                    image: ''
                },
                {
                    type: 'feature',
                    heading: 'Faculty Certification with Corporate DNA',
                    content: 'UCU’s pioneering Faculty Certification initiative reimagines academic excellence.',
                    image: ''
                }
            ]
        }
    ];

    for (const page of pages) {
        await AboutPageData.create(page);
        console.log(`Seeded: ${page.title}`);
    }

    console.log("Data seeding completed with Correct Schema!");
    process.exit();
};

seedData();
