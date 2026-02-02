
const axios = require('axios');
const dotenv = require('dotenv');
const { join } = require('path');

dotenv.config({ path: join(__dirname, '../.env') });

// Assuming valid PORT is in env or default to 5000
const PORT = process.env.PORT || 5000;
const BASE_URL = `http://localhost:${PORT}/api`;

const testPage = async (slug) => {
    try {
        console.log(`Testing GET ${BASE_URL}/about/page/${slug}`);
        const response = await axios.get(`${BASE_URL}/about/page/${slug}`);
        console.log(`Status: ${response.status}`);
        console.log(`Success: ${response.data.success}`);
        console.log(`Data Title: ${response.data.data?.title}`);
    } catch (error) {
        if (error.response) {
            console.error(`Error Status: ${error.response.status}`);
            console.error(`Error Data:`, error.response.data);
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
};

testPage('leader-ship');
