'use client'

import ChatCard from "@/components/Chatbot/chatCard";
import { useParams } from "next/navigation";

function Chat() {
    const { sessionId } = useParams<{ sessionId: string }>();
    
    return (
        <div className="h-screen flex flex-col overflow-y-auto max-w-full">
            <div className="text-center text-3xl font-bold">
            Welcome to SympAI!
            </div>
        </div>
    );
};

export default Chat;
