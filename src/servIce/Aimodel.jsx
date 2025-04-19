
export async function callGeminiAPI(prompt) {
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const generationConfig = {
    temperature: 0,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseMimeType: 'application/json',
  };

  const data = {
    generationConfig,
    contents: [
      {
        role: 'user',
        parts: [
          { text: prompt },
        ],
      },
    ],
  };

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      throw new Error(`Gemini API request failed: ${response.status}`);
    }
    const responseData = await response.json();
    if (responseData.candidates && responseData.candidates.length > 0 && responseData.candidates[0].content && responseData.candidates[0].content.parts && responseData.candidates[0].content.parts.length > 0) {
      return responseData.candidates[0].content.parts[0].text;
    } else {
      console.warn('Unexpected Gemini API response format:', responseData);
      return JSON.stringify(responseData);
    }
  } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw error;
  }
}
