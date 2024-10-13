'use client'

import ChatCard from "@/components/Chatbot/chatCard";
import { Spinner } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { Suspense } from "react";

function Chat() {
    const { sessionId } = useParams<{ sessionId: string }>();
    return (
        <div className="h-screen flex flex-col overflow-y-auto max-w-full">
            <Suspense fallback={<Spinner />}>
                <ChatCard sessionId={sessionId}/>
            </Suspense>
        </div>
    );

};
export default Chat;
