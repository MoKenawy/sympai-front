'use client';

import { fetchSessionIds } from "@/data-access/chatbotAPI";
import { Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";


function SideNav() {
  const [sessions, setSessions] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const sessionIds = await fetchSessionIds();
      setSessions(sessionIds);
    })();
  }, []);

  return (
    <div className="w-64 flex flex-col bg-gray-100 p-4">
      <div className="font-bold text-xl mb-4">SymAI</div>
      {sessions.map((sessionId) => (
        <Link key={sessionId} href={`/chat/${sessionId}`}>
          <Card key={sessionId} className="w-full rounded-md hover:bg-zinc-200 transition-colors">
            <CardHeader>
              Chat {sessionId}
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );

}

export default SideNav;