export interface ICategoryValues {
  id: number;
  name: string;
}

export interface IDifficultyValues {
  id: number;
  label: string;
  value: string;
}

export interface IFormValues {
  user: string;
  category: string;
  difficulty: string;
  type?: string;
}

export interface IResponse {
  message?: string;
  code: number;
}
