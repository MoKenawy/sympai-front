'use client';


import { fetchSessionIds } from "@/data-access/chatbotAPI";
import { Button, Card, CardHeader, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

function SideNav() {
  const [sessions, setSessions] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const sessionIds = await fetchSessionIds();
        setSessions(sessionIds);
      } catch (error) {
        console.error('Failed to fetch session IDs:', error);
      }
    })();
  }, []);

  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const newSessionId = Array.from({ length: 6 }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
  const url = `/chat/${newSessionId}`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-items-center text-left bg-zinc-50 p-4 overflow-y-auto border-r border-gray-300 sm:w-64">
      <div className="font-bold text-xl mb-4">SymAI</div>

      <Link href={url}>
        <Button className="w-full sm:w-28 mb-4 bg-green-500 text-white">New Chat</Button>
      </Link>

      {sessions.map((sessionId) => (
        <div key={sessionId}>
          <Spacer y={2} />
          <Link href={`/chat/${sessionId}`}>
            <Card className="w-full sm:w-52 h-fit rounded-lg bg-inherit hover:bg-zinc-200 transition-colors">
              <CardHeader className="flex items-center justify-start py-2 px-4 z-0">
                <p className="text-md">{sessionId}</p>
              </CardHeader>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default SideNav;
