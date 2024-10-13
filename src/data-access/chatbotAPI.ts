'server'

// apiService.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_APP_API_BASE_URL;

export const fetchChatHistory = async (sessionId: string) => {
    console.log(API_BASE_URL);
    try {
        const response = await fetch(`${API_BASE_URL}/get_user_history?session_id=${sessionId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
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
        const response = await fetch(`${API_BASE_URL}/user_chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: message,
                table_name: 'SessionTable',
                session_id: sessionId,
            }),
        });

        if (!response.ok) {
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
        const response = await fetch(`${API_BASE_URL}/scan_sessions`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch session IDs');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching session IDs:', error);
        throw error; // Re-throwing to be handled in the component
    }
};

