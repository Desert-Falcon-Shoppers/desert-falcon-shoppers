import { useState, useContext } from "react"
import { useHistory } from "react-router-dom";
import { logInUser } from "../axios-services";
import { AuthContext } from "../context/AuthContext";

export function useLogin() {
    const { updateAuthStatus } = useContext(AuthContext)
    const history = useHistory()

    const [form, setForm] = useState({
        username: "",
        password: "",
    })

    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.value]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            console.log(e)
            e.preventDefault();
            console.log({ form })

            const { message, token } = await logInUser(form)
            localStorage.setItem('capstone_token', token)
            setError(null)
            updateAuthStatus();
            history.push('/productrows')
        } catch (error) {
            setError(error)
            console.error(error)
        }
    }
    return {
        h1: "Login",
        error,
        handleSubmit,
        handleChange,
    }
}

