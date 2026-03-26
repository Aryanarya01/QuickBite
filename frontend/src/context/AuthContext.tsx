import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { User } from "../types/User";
import type { AuthContextType } from "../types/AuthContexTypes";
import { apiFetch } from "../api/api";

export const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  //  Auto login check
  useEffect(() => {
    const checkUser = async () => {
    try {
      const data = await apiFetch("/auth/profile");
      setUser(data.user);
    } catch (err) {
      setUser(null)
      console.log(err)
      console.log("Not Logged in!");
      
    } finally {
      setLoading(false);
    }
  };
    checkUser();
  }, []);

  const logout = async () => {
    await apiFetch("/auth/logout", {
      method: "POST",
    });
    setUser(null);
  };

 return (
  <AuthContext.Provider value={{ loading, logout, user, setUser }}>
    {children}
  </AuthContext.Provider>
);
};

//              custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider!");
  }

  return context;
};
