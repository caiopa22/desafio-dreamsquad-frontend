'use client'

import { ArrowRight, MicIcon, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { useTheme } from "./components/ui/theme-provider";

const messages = [
  {
    message: "Oi, IA! Como você está hoje?",
    role: "user"
  },
  {
    message: "Oi! Estou ótima, pronta para conversar com você. E você, como está?",
    role: "assistant"
  },
  {
    message: "Estou bem também. Você pode me recomendar um livro de ficção científica?",
    role: "user"
  },
  {
    message: "Claro! 'Duna' de Frank Herbert é um clássico imperdível e cheio de aventura e política intergaláctica.",
    role: "assistant"
  },
  {
    message: "Ótimo! E qual é a melhor forma de organizar meu tempo para ler mais?",
    role: "user"
  },
  {
    message: "Uma boa ideia é criar blocos de 30 a 60 minutos por dia exclusivamente para leitura. Assim você cria consistência sem se sobrecarregar.",
    role: "assistant"
  },
  {
    message: "Interessante! Vou tentar isso. Obrigado pela dica!",
    role: "user"
  },
  {
    message: "De nada! Boa leitura e qualquer coisa, estou aqui para mais recomendações.",
    role: "assistant"
  }
];

export default function App() {

  const { setTheme, theme } = useTheme()

  const [hasChat, setHasChat] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen w-full p-4 border">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute top-4 right-4"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      {hasChat ? (
        <div className="flex flex-col gap-12 w-3/5">
          <div className="flex flex-col justify-center gap-6 mt-12">
            {messages.map((message, index) => {
              const isAI = message.role === "assistant";
              return (
                <div key={index} className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`
                                            p-4
                                            ${isAI ? "bg-muted text-foreground" : "bg-primary text-white"}
                                            rounded-xl font-sans max-w-3/4
                                        `}
                  >
                    {message.message}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Textarea
              placeholder="Type your awesome prompt here"
              className="resize-none font-sans !text-lg h-32 "
            >
            </Textarea>
            <div className="w-full flex gap-4 justify-end">
              <Button size="icon" className="rounded-full">
                <MicIcon />
              </Button>
              <Button onClick={() => setHasChat(true)} size="icon" className="rounded-full">
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full gap-12">
          <h1 className="font-[Geist] text-3xl text-foreground font-bold">Hello Caio, lets build the next big thing.</h1>
          <div className="flex flex-col gap-4 w-2/4">
            <Textarea
              placeholder="Type your awesome prompt here"
              className="resize-none font-sans !text-lg h-32 "
            >
            </Textarea>
            <div className="w-full flex gap-4 justify-end">
              <Button size="icon" className="rounded-full">
                <MicIcon />
              </Button>
              <Button onClick={() => setHasChat(true)} size="icon" className="rounded-full">
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}