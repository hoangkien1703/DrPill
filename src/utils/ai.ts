import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDCwpg9_sxxGyx7ssjsBxd8KjeDx-wcDCk');

export async function getChatResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting AI response:', error);
    throw error;
  }
}