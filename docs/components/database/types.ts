export interface ULPResult {
  url?: string;
  login?: string;
  password?: string;
  date: string;
}

export type SearchType = 'url' | 'login' | 'password';