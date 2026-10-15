export type User = { id: number; username: string };

export type AuthState = {
  user: User | null;
  access: string | null;
  refresh: string | null;
  setAuth: (data: { user?: User; access: string; refresh?: string }) => void;
  setAccess: (access: string, refresh?: string) => void;
  logout: () => void;
};