import React, { useState } from "react";
import api from "../api/axios";
import {
    useNavigate,
    Link,
} from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post(
                "/auth/login",
                form
            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            if (res.data.role === "ADMIN") {
                navigate("/admin");
            } else if (
                res.data.role === "OWNER"
            ) {
                navigate("/owner");
            } else {
                navigate("/stores");
            }
        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Welcome Back 👋</h1>

                <p className="login-subtitle">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                email: e.target.value,
                            })
                        }
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                password: e.target.value,
                            })
                        }
                    />

                    <button type="submit">
                        Login
                    </button>
                </form>

                <p className="register-text">
                    Don't have an account?
                </p>

                <Link to="/">
                    <button className="register-btn">
                        Register Now
                    </button>
                </Link>
            </div>
        </div>
    );
}