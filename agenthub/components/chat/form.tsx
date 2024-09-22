import { Input } from "@/components/chat/ui/input";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { serverUrl } from "@/lib/env";
import { ChatMessageProps } from "./body/message-box";


export const Form = () => {
    const [agents, setAgents] = useState<any[]>();
    const target = useRef<HTMLButtonElement>(null);
    const [value, setValue] = useState('');

    const [chatStarted, setChatStarted] = useState(false);
    const [messages, setMessages] = useState<Array<ChatMessageProps>>([]);

    useEffect(() => {
        const _ = async () => {
            const response = await axios.get(`${serverUrl}/get_all_agents`);
            setAgents(response.data.agents)
        }
        _()
    }, [])

    const sendMessage = (a: any) => console.log(a);

    const [message, setMessage] = useState<string>("");

    const handleSendMessage = async () => {
        if (message === "") return;
        console.log("message sent");
        const temp = message;
        setMessage("");
        await sendMessage({
            role: "user",
            content: temp,
        });
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSendMessage();
        }
    }

    return (
        <div className="relative px-2 sm:px-12 md:px-52 lg:pr-[500px] 2xl:px-96 w-full bg-neutral-800">
            <Input
                placeholder="Message TalkGPT..."
                className="border-[1px] border-neutral-500 ring-none rounded-xl bg-inherit text-neutral-200 placeholder:text-neutral-400 h-12"
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};