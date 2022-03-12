import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { logInUser } from '../axios-services';
import { AuthContext } from '../context/AuthContext';

export function useLogin() {
  const { updateAuthStatus } = useContext(AuthContext);
  const history = useHistory();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);

<<<<<<< HEAD
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] })
    }
=======
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
>>>>>>> 35bd2b2d976ef908babf3b70290b11b1c9402a1b

  const handleSubmit = async (e) => {
    try {
      console.log(e);
      e.preventDefault();
      console.log({ form });

      const { message, token } = await logInUser(form);
      localStorage.setItem('capstone_token', token);
      setError(null);
      updateAuthStatus();
      history.push('/productrows');
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };
  return {
    h1: 'Login',
    error,
    handleSubmit,
    handleChange,
  };
}
