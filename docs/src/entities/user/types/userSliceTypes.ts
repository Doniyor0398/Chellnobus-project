export interface UserSliceState {
  name: string | null;
  email: string | null;
  token: string | null;
  id: string | null;
  isAuth: boolean;
}
