import { openAIInstance } from "../api/openai";

export const getOpenApiMessage = async (value:string): Promise<string> => {
  console.log('value',value)
  try {
    const response = await openAIInstance.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content:value ,
        },
      ],
    });

    return response.data.choices?.[0]?.message?.content || 'No response';
  } catch (error) {
    return 'Error getting response.';
  }
};