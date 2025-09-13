import { openAIInstance } from "../api/openai";

export const getOpenApiMessage = async (input:string): Promise<string> => {
  try {
    const response = await openAIInstance.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: input,
        },
      ],
    });

    return response.data.choices?.[0]?.message?.content || 'No response';
  } catch (error) {
    return 'Error getting response.';
  }
};