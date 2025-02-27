export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface RegisterState {
  loading: boolean;
  error: string | null;
}
