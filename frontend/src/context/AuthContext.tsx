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
import { data } from "react-router-dom";

export const AuthContext = createContext<AuthContextType | null>(null);
export const Authprovider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  //  Auto login check
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await apiFetch("/auth/profile");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (err) {
        console.log("Not Logged in!");
        setUser(null);
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
      {!loading && children}
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
