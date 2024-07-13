import { useState } from 'react';

const useAuth = () => {

  const initialIsAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialIsAuthenticated);

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
  };
  // console.log(isAuthenticated)

  return { isAuthenticated, login, logout };
};

export default useAuth;
