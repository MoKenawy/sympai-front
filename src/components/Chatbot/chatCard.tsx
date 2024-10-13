
'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Image, Spacer } from '@nextui-org/react';
import { fetchChatHistory, sendUserMessage } from '@/data-access/chatbotAPI'; // Adjust the import path as needed
import Message from '@/schemas/message';
import ChatFooter from './chatFooter';

function ChatCard({ sessionId }: { sessionId: string }) {
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hello! I'm SymAI, your medical assistant. How can I help you today?", sender: 'bot' },
    ]);
    const [userMessage, setUserMessage] = useState<string>('');

    useEffect(() => {
        /**
         * Fetches the chat history from the chatbot API and updates the state with the received messages
         * @returns {Promise<void>}
         */
        const loadChatHistory = async (): Promise<void> => {
            try {
                // Fetch the chat history from the API
                const history = await fetchChatHistory(sessionId);

                // Update the state with the received messages
                setMessages(history);
            } catch (error) {
                console.error('Failed to load chat history:', error);
            }
        };

        loadChatHistory();
    }, [sessionId]);

    /**
     * Handles sending a user message to the chatbot API and updates the state
     * @returns {void}
     */
    const handleSendMessage = async () => {
        const trimmedUserMessage = userMessage.trim();

        if (!trimmedUserMessage) return;

        const newUserMessage: Message = { text: trimmedUserMessage, sender: 'user' };

        // Update the state with the new user message
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);

        // Reset the user message input
        setUserMessage('');

        try {
            // Send the user message to the chatbot API
            const botMessage = await sendUserMessage(sessionId, trimmedUserMessage);

            if (botMessage) {
                // Update the state with the bot's response
                setMessages((prevMessages) => [...prevMessages, { text: botMessage, sender: 'bot' }]);
            }
        } catch (error) {
            console.error('Failed to send user message:', error);
            // Handle any errors, and add an error message to the state
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Sorry, something went wrong. Please try again.", sender: 'bot' },
            ]);
        }
    };

    return (
        <div className="w-full mx-auto p-10 flex flex-col">
            <Card className="w-full">
                <CardHeader className="fixed top-0 w-full flex gap-3 bg-white" style={{ zIndex: 1 }}>
                    <Image
                        alt="SymAI logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/44376476?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">SymAI</p>
                        <p className="text-small text-default-500">symai.org</p>
                    </div>
                </CardHeader>
                <div className="flex-1 overflow-y-auto">
                    <CardBody className='p-0' style={{ marginTop: '56px' }}>
                        <div className="p-5 border border-solid border-gray-300 flex flex-col gap-2">
                            {messages.map((msg, index) => (
                                <div key={index} className={msg.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                                    {msg.sender === 'user' ? (
                                        <div className="bg-zinc-100 rounded-md p-2 ">
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    )}
                                    <Spacer y={2} />
                                </div>

                            ))}

                        </div>

                    </CardBody>
                </div>
                <ChatFooter userMessage={userMessage} setUserMessage={setUserMessage} handleSendMessage={handleSendMessage} />
            </Card>

        </div>

    );
};

export default ChatCard;

