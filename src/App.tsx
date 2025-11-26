import { ArrowRight, MicIcon, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import ToggleTheme from "./components/toggle-theme";
import InitialChat from "./components/initial-chat";
import { useChat } from "./hooks/useChat";
import ChatInput from "./components/chat-input";
import ReactMarkdown from 'react-markdown';
import { SidebarTrigger, useSidebar } from "./components/ui/sidebar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./components/ui/dialog";

export default function App() {

  const { messages, clearChat, isLoading, sendMessage } = useChat();
  const [prompt, setPrompt] = useState<string>("");
  const [hasChat, setHasChat] = useState<boolean>(false);
  const { open } = useSidebar();

  function handleSubmit() {
    if (!prompt) return;
    setHasChat(true);
    sendMessage(prompt);
    setPrompt("");
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }


  return (
    <div className="flex relative flex-col justify-center items-center min-h-screen w-full">
      <ToggleTheme />

      <div className="fixed right-16 top-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="p-2 rounded-full" disabled={!hasChat}>
              <Trash className="w-5 h-5 text-red-600" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Confirmar ação</DialogTitle>
              <DialogDescription>
                Tem certeza que deseja resetar o contexto? Essa ação não pode ser desfeita.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 flex justify-end gap-2">
              <DialogClose className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-black font-[Geist]">
                Cancelar
              </DialogClose>
              <DialogClose
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-[Geist]"
                onClick={() => {
                  clearChat(); 
                  setHasChat(false);
                }}
              >
                Confirmar
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className={`fixed top-4 duration-200 ease-linear`}
        style={{
          left: open ? 'calc(var(--sidebar-width) + 1rem)' : '1rem'
        }}
      >
        <SidebarTrigger />
      </div>

      {hasChat ? (
        <div className="flex flex-col gap-12 w-3/5 pb-56">
          <div className="flex flex-col justify-center gap-6 mt-12">
            {messages.map((message, index) => {
              const isAI = message.role === "assistant";
              return (
                <div
                  key={index}
                  className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}
                >
                  <div
                    className={`
                      p-4
                      ${isAI ? "bg-muted text-foreground" : "bg-chart-1 text-white"}
                      rounded-xl font-sans 
                      max-w-[75%]              
                      break-words                
                    `}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    <ReactMarkdown>{message.message}</ReactMarkdown>
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="flex justify-start ">
                <div className="size-4 rounded-full bg-chart-1 animate-pulse"/>
              </div>
            )}
          </div>

          <div
            className={`
              ${open ? "left-(--sidebar-width)" : "left-0"} 
              transition-[left] ease-linear duration-200 
              fixed bottom-0 bg-background right-0 p-4 z-10
            `}
          >
            <div className="w-3/5 mx-auto">
              <ChatInput
                setPrompt={setPrompt}
                prompt={prompt}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      ) : (
        <InitialChat setPrompt={setPrompt} prompt={prompt} onSubmit={handleSubmit} />
      )}
    </div>
  )
}
