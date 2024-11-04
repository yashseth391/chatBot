import axios from 'axios';
import { dummyMessages } from '../constant/Messages'; // Import dummyMessages

// Define your API key directly in the code
const API_KEYS = 'mXd9oisfACO7IcjqYP0cXOq8qVN1lKtc';

const client = axios.create({
    baseURL: 'https://api.mistral.ai/v1',
    timeout: 10000,
    headers: {
        "Authorization": `Bearer ${API_KEYS}`,
        "Content-Type": "application/json",
    }
});

const mistralEndpoint = 'https://api.mistral.ai/v1/chat/completions';

export const apiCall = async (prompt) => {
    try {
        const res = await client.post(mistralEndpoint, {
            model: 'mistral-small-latest', // Replace with the appropriate Mistral model name
            messages: [{
                role: 'user',
                content: ` ${prompt}`
            }]
        });
        const messageContent = res.data.choices[0].message.content;
        console.log("Message content:", messageContent);
        dummyMessages.push({ role: 'user', content: prompt });
        dummyMessages.push({ role: 'assistant', content: messageContent.trim() });
        console.log("Updated messages:", dummyMessages);
        return { success: true, data: dummyMessages };
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("Error response data:", error.response.data);
            console.log("Error response status:", error.response.status);
            console.log("Error response headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log("Error request:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error message:", error.message);
        }
        return { success: false, msg: error.message };
    }
};