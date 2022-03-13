import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function useLogout() {
  const { updateAuthStatus } = useContext(AuthContext);
  const history = useHistory();

  const [error, setError] = useState(null);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("");
      setError(null);
      updateAuthStatus();
      history.push("/home");
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };
  return {
    error,
    handleLogout,
  };
}
