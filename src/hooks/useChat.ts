import { useState } from 'react';
import type { Message } from '../models/Messages';
import axios from "axios";
import type { AiResponse } from '../models/ApiResponses';
import { showToast } from '../utils/toast';


export const useChat = () => {

  const BASE_URL = "http://127.0.0.1:8000";

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message: string) => {
    setIsLoading(true);
    const newMessage: Message = {
      message,
      role: 'user',
    };
    setMessages(prev => [...prev, newMessage]);
    axios.post(`${BASE_URL}/chat`, { "message": message }, {}).then((response) => {
      if (response.status === 200) {
        const data: AiResponse = response.data;
        const aiContent = data.response.content[0];
        const aiText = typeof aiContent === 'string' ? aiContent : aiContent.text;
        const AIRESPONSE: Message = {
          message: aiText,
          role: 'assistant'
        }
        setMessages(prev => [...prev, AIRESPONSE]);

      }
    }).finally(() => setIsLoading(false))
  };

  const clearChat = () => {
    setMessages([]);
    axios.post(`${BASE_URL}/chat/reset`, {}, {}).then((response) => {
      if (response.status === 200) {
        showToast("Chat resetado com sucesso", "success")
        return
      }
      showToast("Ocorreu um erro ao apagar o chat.", "error")
    })

  };

  return {
    messages,
    BASE_URL,
    isLoading,
    sendMessage,
    clearChat
  };
};