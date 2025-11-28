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

    try {
      const response = await axios.post(`${BASE_URL}/chat`, { "message": message });
      
      if (response.status === 200) {
        const data: AiResponse = response.data;
        const aiContent = data.response.content[0];
        const aiText = typeof aiContent === 'string' ? aiContent : aiContent.text;
        
        const AIRESPONSE: Message = {
          message: aiText,
          role: 'assistant'
        };
        
        setMessages(prev => [...prev, AIRESPONSE]);
      }
    } catch (error) {
      let errorMessage = "Desculpe, ocorreu um erro ao processar sua mensagem. ";
      
      if (axios.isAxiosError(error)) {
        if (error.request && !error.response) {
          errorMessage += "Não foi possível conectar ao servidor.";
        } else {
          errorMessage += error.response?.data?.message || "Erro desconhecido do servidor.";
        }
      } else {
        errorMessage += "Erro inesperado. Tente novamente.";
      }
      
      const errorResponse: Message = {
        message: errorMessage,
        role: 'assistant'
      };
      
      setMessages(prev => [...prev, errorResponse]);
      
      console.error('Erro ao enviar mensagem:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/chat/reset`);
      
      if (response.status === 200) {
        setMessages([]);
        showToast("Chat resetado com sucesso", "success");
      } else {
        showToast("Ocorreu um erro ao apagar o chat.", "error");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          showToast(`Erro ao resetar chat: ${error.response.data?.message || 'Erro desconhecido'}`, "error");
        }
      } else {
        showToast("Erro inesperado ao resetar chat.", "error");
      }
      
      console.error('Erro ao resetar chat:', error);
    }
  };

  return {
    messages,
    BASE_URL,
    isLoading,
    sendMessage,
    clearChat
  };
};