export interface PlanResponse {
  mealPlan: string;
  workoutPlan: string;
  tip: string;
}

export interface FoodAnalysisResponse {
  foodName: string;
  calories: string;
  protein: string;
  carbs: string;
  fats: string;
  score: number; // 0 to 10
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}