'use client';

import { Button, CardFooter } from "@nextui-org/react";


/**
 * ChatFooter Component
 * @param {string} userMessage - The current user message
 * @param {(value: string) => void} setUserMessage - A function to set the user message
 * @param {() => void} handleSendMessage - A function to handle sending the user message
 * @returns {JSX.Element}
 */
function ChatFooter({ userMessage, setUserMessage, handleSendMessage }: {
    userMessage: string;
    setUserMessage: (value: string) => void;
    handleSendMessage: () => void;
}) {
    return (
        <CardFooter className="mt-3 w-full bg-zinc-100 p-6 z-10 rounded-lg" >
            <div className="w-full flex flex-wrap items-end md:flex-nowrap gap-4">
                <textarea
                    className="w-full h-full rounded-full bg-zinc-200 p-2 resize-none "
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Message SymAI"
                    rows={1}
                />
                <Button
                    onClick={handleSendMessage}
                    disabled={!userMessage.trim()}
                    className={`w-auto flex-shrink-0 rounded-lg ${userMessage.trim() ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-400'}`}
                >
                    Send
                </Button>
            </div>
        </CardFooter>
    );
}
export default ChatFooter;