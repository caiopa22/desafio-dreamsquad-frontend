import { ArrowRight, Check, CheckIcon, CopyIcon, MicIcon, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
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
  const [copiedIndex, setCopiedIndex] = useState<number | undefined>(undefined);

  function handleSubmit() {
    if (!prompt) return;
    setHasChat(true);
    sendMessage(prompt);
    setPrompt("");
  }

  // Função para copiar
  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);

      // Reset após 2 segundos
      setTimeout(() => {
        setCopiedIndex(undefined);
      }, 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [messages]);

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

      <div
        className={`fixed top-4 duration-200 ease-linear`}
        style={{
          left: open ? 'calc(var(--sidebar-width) + 1rem)' : '1rem'
        }}
      >
        <SidebarTrigger />
      </div>

      {hasChat ? (
        <div className="flex flex-col gap-12 w-full sm:w-4/5 lg:w-3/6 pb-56">
          <div className="flex flex-col justify-center gap-6 mt-12">
            {messages.map((message, index) => {
              const isAI = message.role === "assistant";
              const isCopied = copiedIndex === index;

              return (
                <div
                  key={index}
                  className={`flex ${isAI ? "flex-col gap-2 justify-start" : "justify-end"} mb-4`}
                >
                  {isAI && (
                    <p className="text-[Geist] font-semibold">Ares disse:</p>
                  )}

                  <div className="flex flex-col items-start gap-2 max-w-[75%]">
                    <div
                      className={`
                        ${isAI ? "text-foreground w-fit" : "bg-chart-5 text-white p-4 rounded-tr-none"} 
                        rounded-xl
                        break-words flex-1
                        font-[Geist]
                      `}
                      style={{ whiteSpace: 'pre-wrap' }}
                    >
                      <ReactMarkdown>{message.message}</ReactMarkdown>
                    </div>

                    {isAI && (
                      <button
                        onClick={() => handleCopy(message.message, index)}
                        className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                        title={isCopied ? "Copiado!" : "Copiar mensagem"}
                        aria-label="Copiar mensagem"
                      >
                        {isCopied ? (
                          <CheckIcon className="w-4 h-4 text-green-600" />
                        ) : (
                          <CopyIcon className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="flex justify-start ">
                <div className="size-4 rounded-full bg-chart-5 animate-pulse-scale" />
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
            <div className="w-full sm:w-4/5 lg:w-3/6 mx-auto">
              <ChatInput
                loading={isLoading}
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
  );
}