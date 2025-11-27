export interface AiResponse {
  response: {
    role: string;
    content: {
      text: string;
    }[];
  };
}