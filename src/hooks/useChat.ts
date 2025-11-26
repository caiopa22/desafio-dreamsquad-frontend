import { useState } from 'react';
import type { Message } from '../models/Messages';

const mocked_messages: Message[] = [
  {
    message: "Oi, IA! Como você está hoje?",
    role: "user"
  },
  {
    message: "Oi! Estou ótima, pronta para conversar com você. E **você**, como está?",
    role: "assistant"
  },
  {
    message: "Estou bem também. Você pode me recomendar um livro de ficção científica?",
    role: "user"
  },
  {
    message: "Claro! Aqui estão algumas opções incríveis de ficção científica:\n\n- **Duna** de Frank Herbert: clássico de aventura e política intergaláctica\n- **Neuromancer** de William Gibson: cyberpunk inovador\n- **Fundação** de Isaac Asimov: império galáctico e estratégias de futuro",
    role: "assistant"
  },
  {
    message: "Uau! Ótimas sugestões. E como posso organizar meu tempo para ler mais?",
    role: "user"
  },
  {
    message: "Aqui vão algumas estratégias para leitura eficiente:\n\n1. **Blocos de leitura diários:** 30 a 60 minutos por dia.\n2. **Metas semanais:** definir quantos capítulos ou páginas você quer ler.\n3. **Ambiente livre de distrações:** escolha um lugar tranquilo.\n4. **Revisão rápida:** anote ideias principais após cada sessão.",
    role: "assistant"
  },
  {
    message: "Interessante! Acho que vou tentar o bloco diário e o ambiente sem distrações.",
    role: "user"
  },
  {
    message: "Perfeito! 👍 Se quiser, posso também sugerir **apps e ferramentas** para acompanhar sua leitura e progresso.",
    role: "assistant"
  },
  {
    message: "Sim, me indique alguns apps.",
    role: "user"
  },
  {
    message: "Claro! Aqui estão algumas opções:\n\n- **Goodreads:** registra leituras e oferece recomendações\n- **Bookly:** organiza metas de leitura e tempo gasto\n- **Libby / Kindle:** acesso a ebooks e audiobooks\n\nVocê pode escolher o que melhor se encaixa na sua rotina.",
    role: "assistant"
  },
  {
    message: "Ótimo, vou testar o Goodreads e o Bookly. Obrigado pela ajuda!",
    role: "user"
  },
  {
    message: "De nada! 📚 Boa leitura e qualquer dúvida ou sugestão de livros, estou sempre aqui.",
    role: "assistant"
  }
];

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>(mocked_messages);
    const [isLoading, setIsLoading] = useState(true);

    const sendMessage = (message: string) => {
        const newMessage: Message = {
            message,
            role: 'user',
        };

        setMessages(prev => [...prev, newMessage]);
    };

    const clearChat = () => {
        setMessages([]);
    };

    return {
        messages,
        isLoading,
        sendMessage,
        clearChat
    };
};