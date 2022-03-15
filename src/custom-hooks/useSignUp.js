import { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import { signUpUser } from "../axios-services/users";
import { AuthContext } from "../context/AuthContext"

export function useSignUp() {
    const { updateAuthStatus } = useContext(AuthContext)
    const history = useHistory()

    const [form, setForm] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",

    })

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { message, token } = await signUpUser(form)
            localStorage.setItem("capstone_token", token)
            setError(null)
            updateAuthStatus();
            history.push("/home")
        } catch (error) {
            if (form.password.length < 8) {
                setError("password is less than 8 characters!!!")
            } else {
                setError("Server Error")
            }
            console.error(error)
        }
    }

    return {
        h1: "Sign Up",
        error,
        handleSubmit,
        handleChange,
    }
}

