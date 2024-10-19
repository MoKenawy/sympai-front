
// apiService.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_APP_API_BASE_URL;

export const fetchChatHistory = async (sessionId: string) => {
    console.log(API_BASE_URL);
    try {
        const response = await fetch(`${API_BASE_URL}/api/get_user_history?session_id=${sessionId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',  // Ensures cookies are included in the request
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Unauthorized, handle redirect to login or error message
                throw new Error('Unauthorized! Please login.');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.map(({ content, type }: { content: string, type: string }) => ({
            text: content,
            sender: type === 'human' ? 'user' : 'bot',
        }));
    } catch (error) {
        console.error('Error fetching chat history:', error);
        throw error; // Re-throwing to be handled in the component
    }
};

export const sendUserMessage = async (sessionId: string, message: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user_chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',  // Ensure the request carries cookies
            body: JSON.stringify({
                prompt: message,
                session_id: sessionId,
            }),
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Handle unauthorized response
                throw new Error('Unauthorized! Please login.');
            }
            throw new Error('Failed to fetch bot response');
        }

        const data = await response.json();
        return data.response; // Assuming 'response' is the key in the API output
    } catch (error) {
        console.error('Error fetching bot response:', error);
        throw error; // Re-throwing to be handled in the component
    }
};

export const fetchSessionIds = async () => {
    console.log(API_BASE_URL);
    try {
        const response = await fetch(`${API_BASE_URL}/api/scan_sessions`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',  // Ensure the request carries cookies
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Handle unauthorized response
                throw new Error('Unauthorized! Please login.');
            }
            throw new Error('Failed to fetch session IDs');
        }

        const data = await response.json();
        
        // Assuming the response contains an array of session objects
        // Extracting the SessionId from each object
        return data.map((session: { SessionId: string }) => session.SessionId);
    } catch (error) {
        console.error('Error fetching session IDs:', error);
        throw error; // Re-throwing to be handled in the component
    }
};

export const getAuthToken = async (username: string, password: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ username, password }).toString(), // Converts to form data
            credentials: 'include',  // Include credentials (cookies)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Store the token in a cookie
        return data.access_token;
    } catch (error) {
        console.error('Error getting token:', error);
        throw error;
    }
};