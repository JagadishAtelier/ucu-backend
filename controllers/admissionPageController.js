const AdmissionPage = require("../Model/AdmissionPageModel");

// Data extracted from frontend components (NewAdminWhy, NewAdminIndustry, etc.)
const defaultData = {
    hero: {
        title: "Transform Your Career with an UCU",
        description: "Transform your career with an UCU that blends academic excellence, industry relevance, and global exposure.",
        badge: "Admissions Open for 2026–28 Batch",
        images: ["/adm.png"], // Or the unsplash placeholder
        cards: [
            { statValue: "8", statLabel: "Specializations" },
            { statValue: "250+", statLabel: "Corporate Partners" },
            { statValue: "2 Yrs", statLabel: "Full-time Program" }
        ]
    },
    whyChoose: {
        title: "Why Choose UCU University",
        subtitle: "UCU University offers a future-ready admission pathway designed to shape global professionals through academic excellence, industry exposure, and holistic development.",
        cards: [
            {
                title: "Experienced Academic Mentors",
                description: "Learn under highly qualified faculty and industry practitioners who guide students with strong academic foundations, practical insights, and career-focused mentoring throughout the program.",
                icon: "FaGraduationCap"
            },
            {
                title: "Industry-Aligned Curriculum",
                description: "Our programs are designed in collaboration with industry experts, ensuring students gain relevant skills through case studies, simulations, internships, and applied learning modules.",
                icon: "FaBriefcase"
            },
            {
                title: "International Learning Environment",
                description: "UCU University provides global exposure through international collaborations, multicultural classrooms, and opportunities for exchange programs and global certifications.",
                icon: "FaGlobe"
            },
            {
                title: "Career-Focused Admissions",
                description: "From admission to graduation, UCU supports students with career counseling, skill development workshops, internships, and employability training to help them transition confidently into professional roles.",
                icon: "FaChartLine"
            }
        ]
    },
    industry: {
        badge: "Industry & Professional Connect",
        title: "Strong Industry Connections That Enhance Your Learning",
        description: "UCU University builds strong relationships with leading organizations to ensure students gain practical exposure alongside academic learning. Our programs are designed to bridge classroom concepts with real-world business practices, helping students develop industry-relevant skills from the very beginning of their academic journey.",
        images: ["https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"],
        cards: [
            {
                title: "Industry Collaborations & Academic Alliances",
                description: "Engage with organizations through guest lectures, industry-led workshops, live case discussions, and applied projects that enhance experiential learning.",
                icon: "FaHandshake"
            },
            {
                title: "Guidance from Industry Experts",
                description: "Students benefit from mentoring sessions, career talks, and interactions with experienced professionals, entrepreneurs, and corporate leaders across sectors.",
                icon: "FaUsers"
            },
            {
                title: "Startup & Innovation Support",
                description: "UCU University encourages innovation through entrepreneurship cells, incubation guidance, startup mentoring, and opportunities to develop business ideas within a supportive academic ecosystem.",
                icon: "FaRocket"
            }
        ]
    },
    admissionProcess: {
        title: "UCU University Admission Process",
        description: "A transparent and structured admission process designed to assess academic readiness, career aspirations, and overall potential.",
        cards: [ // Using cards array for TimeLine
            {
                title: "Online Application",
                statValue: "November – March",
                description: "Complete the online application by submitting personal details, academic records, and a statement of purpose through the UCU University admissions portal."
            },
            {
                title: "Entrance Exam Evaluation",
                statValue: "CAT / XAT / GMAT / CMAT",
                description: "Applicants are shortlisted based on valid entrance test scores in line with UCU University admission guidelines."
            },
            {
                title: "Interaction / Assessment",
                statValue: "April 2026",
                description: "Shortlisted candidates participate in group discussions, written assessments, or interaction rounds to evaluate communication skills, analytical ability, and teamwork."
            },
            {
                title: "Personal Interview",
                statValue: "April – May",
                description: "A faculty panel reviews the candidate’s academic background, career goals, leadership potential, and program fit."
            }
        ],
        eligibility: [
            {
                title: "Academic Qualification",
                description: "A bachelor’s degree in any discipline (10+2+3 or 10+2+4 pattern) from a recognized university with the minimum marks prescribed by UCU University."
            },
            {
                title: "Entrance Examination",
                description: "A valid score in CAT / XAT / GMAT / CMAT or other accepted examinations as notified by the university. There is no age restriction for admission."
            },
            {
                title: "Work Experience",
                description: "Work experience is not mandatory. Fresh graduates and working professionals are equally encouraged to apply."
            }
        ],
        documents: [
            "Class 10, 12, and Bachelor’s degree mark sheets and certificates",
            "Valid entrance examination scorecard",
            "Statement of Purpose outlining academic and career objectives",
            "Work experience certificate (if applicable)",
            "Letters of recommendation (if applicable)",
            "Recent passport-size photographs"
        ]
    },
    whoCanApply: {
        title: "Who Should Apply to UCU University",
        subtitle: "UCU University invites motivated learners to be part of its founding cohort and contribute to a forward-looking academic and professional ecosystem.",
        badge: "Founding Batch 2026–28",
        cards: [
            {
                title: "Ideal Candidate Profile",
                icon: "fas fa-lightbulb",
                description: "Individuals who are eager to learn and adapt.",
                listItems: ["Curious & Innovative Thinkers", "Strong Academic Foundation", "Leadership & Initiative"] // Extending schema usage implicitly if model supports mixed or just store as string
            },
            {
                title: "Diverse Academic Backgrounds",
                icon: "fas fa-users",
                description: "Engineering, Commerce, Science, Arts, Humanities.",
                listItems: ["All Disciplines Welcome", "Fresh Graduates", "Working Professionals"]
            },
            {
                title: "Founding Batch Benefits",
                icon: "fas fa-trophy",
                description: "Be part of UCU University’s first academic legacy.",
                listItems: ["Inaugural Cohort Recognition", "Influence Academic Culture", "Close Faculty Interaction"]
            }
        ],
        // We might need to store stats somewhere. Re-using 'cards' or adding specific field if schema allows.
        // For now, let's put stats in description or separate field if valid.
        // Since schema is 'sections', we can probably fit simple stats in 'cards' too if we define custom logic in frontend.
        // Or just hardcode stats in frontend for now as they seem structural.
    },
    learningExperience: {
        title: "Learn from the Best at UCU University",
        description: "UCU University’s faculty combines academic excellence, research depth, and real-world industry exposure to deliver a future-focused learning experience.",
        cards: [
            {
                title: "Dr. Rajesh Kumar", // Name
                subtitle: "Strategy & Leadership", // Role
                image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg",
                description: "At UCU University, we focus on experiential learning that helps students think strategically and lead with confidence in complex business environments.", // Quote
                listItems: ["PhD in Management", "20+ years of academic & industry experience"]
            },
            {
                title: "Dr. Priya Menon",
                subtitle: "Finance & Business Analytics",
                image: "https://img.freepik.com/free-photo/picture-dissatisfied-grumpy-young-afro-american-woman-with-long-straight-hair-expressing-her-disagreement-keeping-arms-folded-looking-with-serious-skeptical-facial-expression_344912-1026.jpg",
                description: "Our approach blends strong analytical foundations with practical financial insights to prepare students for data-driven decision making.",
                listItems: ["PhD in Finance", "Researcher & industry consultant"]
            },
            {
                title: "Prof. Arjun Mehta",
                subtitle: "Marketing & Digital Strategy",
                image: "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg",
                description: "UCU University emphasizes applied learning, enabling students to understand consumer behavior and modern digital business models.",
                listItems: ["MBA & Advanced Marketing Certifications", "Academic mentor with industry exposure"]
            }
        ]
    },
    faqSection: {
        title: "Frequently Asked Questions",
        description: "Everything you need to know about our UCU program",
        faqs: [
            {
                question: "What programs does UCU University offer admissions for?",
                answer: "UCU University offers admissions to a wide range of undergraduate, postgraduate, and doctoral programs across multiple disciplines. Program availability may vary by academic year as per university regulations."
            },
            {
                question: "What is the general eligibility criteria for admission?",
                answer: "Eligibility criteria depend on the chosen program. In general, applicants must meet the minimum academic qualifications prescribed by UCU University and relevant regulatory bodies. Detailed program-specific requirements are published in the official admission notification."
            },
            {
                question: "Is an entrance examination required for admission?",
                answer: "Entrance examinations may be required for certain programs. UCU University considers national-level entrance tests, university-conducted assessments, or merit-based evaluation depending on the program applied for.",
            },
            {
                question: "How is the admission selection process conducted?",
                answer: "Admissions are based on a transparent evaluation process that may include academic performance, entrance test scores, interviews, or interaction rounds, depending on the program and level of study."
            },
            {
                question: "Are scholarships or financial assistance options available?",
                answer: "Yes. UCU University offers merit-based and need-based scholarships in accordance with university policy. Eligibility and award criteria vary by program and are subject to availability."
            },
            {
                question: "Does UCU University provide support for career and skill development?",
                answer: "UCU University supports students through academic mentoring, skill development initiatives, internships, industry exposure activities, and career guidance services to enhance overall employability."
            }
        ]
    },
    readyToApply: {
        title: "Ready to Transform Your Career?",
        description: "Join 180 ambitious individuals in the Class of 2026. Applications close March 31, 2026."
    }
};


// Get Admission Page Data (Singleton)
// Get Admission Page Data (Singleton)
// Get Admission Page Data (Singleton)
exports.getAdmissionPageData = async (req, res) => {
    try {
        let data = await AdmissionPage.findOne();
        if (!data) {
            // Create default from the extracted extracted data
            data = new AdmissionPage(defaultData);
            await data.save();
        } else {
            // Check for missing sections and backfill defaults
            let isModified = false;
            const sections = ['hero', 'whyChoose', 'industry', 'admissionProcess', 'whoCanApply', 'learningExperience', 'faqSection', 'readyToApply'];

            sections.forEach(section => {
                // Check if section is missing, empty object, or has empty title
                const isMissing = !data[section];
                // Check if title is explicitly empty string (common in uninitialized sections)
                const hasEmptyTitle = data[section] && (data[section].title === "" || data[section].title === undefined);

                if (isMissing || hasEmptyTitle) {
                    console.log(`Backfilling missing/empty section: ${section}`);
                    // We assign the default data. 
                    // Note: This replaces the entire subdocument for that section.
                    data[section] = defaultData[section];
                    isModified = true;
                }
            });

            // Specific check for Admission Process new fields (Eligibility & Documents)
            if (data.admissionProcess) {
                if (!data.admissionProcess.eligibility || data.admissionProcess.eligibility.length === 0) {
                    console.log("Backfilling missing eligibility in admissionProcess");
                    data.admissionProcess.eligibility = defaultData.admissionProcess.eligibility;
                    isModified = true;
                }
                if (!data.admissionProcess.documents || data.admissionProcess.documents.length === 0) {
                    console.log("Backfilling missing documents in admissionProcess");
                    data.admissionProcess.documents = defaultData.admissionProcess.documents;
                    isModified = true;
                }
            }

            if (isModified) {
                // Save and update the local data variable with the saved result
                data = await data.save();
            }
        }
        res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAdmissionPageData:", error);
        res.status(500).json({ message: "Error fetching admission page data", error: error.message });
    }
};

// Update Admission Page Data
exports.updateAdmissionPageData = async (req, res) => {
    try {
        let data = await AdmissionPage.findOne();
        if (!data) {
            data = new AdmissionPage(req.body);
        } else {
            // Merge updates
            Object.assign(data, req.body);
        }
        const updatedData = await data.save();
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ message: "Error updating admission page data", error: error.message });
    }
};
