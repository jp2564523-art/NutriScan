import { GoogleGenAI, Type } from "@google/genai";
import { PlanResponse, FoodAnalysisResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSamplePlan = async (goal: string): Promise<PlanResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Gere um exemplo muito breve e futurista de plano para um usuário com o objetivo: ${goal}.
      O tom deve ser motivacional e tecnológico ("NutriScan AI Analysis").
      Retorne APENAS um JSON com 3 campos:
      - mealPlan: Uma sugestão de almoço energizante.
      - workoutPlan: Uma sugestão de treino rápido (3 exercícios).
      - tip: Uma dica de biohacking ou saúde rápida.
      Mantenha as descrições curtas (máximo 15 palavras por item).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            mealPlan: { type: Type.STRING },
            workoutPlan: { type: Type.STRING },
            tip: { type: Type.STRING }
          },
          required: ["mealPlan", "workoutPlan", "tip"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as PlanResponse;
    }
    throw new Error("No data returned");
  } catch (error) {
    console.error("Error generating plan:", error);
    return {
      mealPlan: "Salmão grelhado com quinoa e espinafre orgânico.",
      workoutPlan: "3x12 Agachamentos, 3x10 Flexões, 1min Prancha.",
      tip: "Hidratação é chave para performance cognitiva."
    };
  }
};

export const analyzeFoodImage = async (base64Image: string): Promise<FoodAnalysisResponse> => {
  // Remove header data:image/jpeg;base64, if present for the API call
  const cleanBase64 = base64Image.split(',')[1] || base64Image;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: cleanBase64
            }
          },
          {
            text: `Analise esta imagem de comida como se fosse um scanner nutricional futurista.
            Identifique o alimento principal.
            Estime Calorias, Proteína, Carboidratos e Gorduras.
            Dê uma nota de saúde de 0 a 10 (score).
            Retorne JSON estrito.`
          }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            foodName: { type: Type.STRING },
            calories: { type: Type.STRING },
            protein: { type: Type.STRING },
            carbs: { type: Type.STRING },
            fats: { type: Type.STRING },
            score: { type: Type.NUMBER }
          },
          required: ["foodName", "calories", "protein", "carbs", "fats", "score"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as FoodAnalysisResponse;
    }
    throw new Error("No data returned");
  } catch (error) {
    console.error("Error analyzing image:", error);
    // Mock fallback for demo purposes if API fails or rate limits
    return {
      foodName: "Identificação Falhou (Modo Demo)",
      calories: "???",
      protein: "?g",
      carbs: "?g",
      fats: "?g",
      score: 0
    };
  }
};