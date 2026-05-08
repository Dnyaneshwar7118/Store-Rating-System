import React, { useState } from "react";
import api from "../api/axios";
import {
    Link,
    useNavigate,
} from "react-router-dom";
import "../styles/Register.css";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post(
                "/auth/register",
                form
            );

            alert(
                "Registered Successfully"
            );

            navigate("/login");
        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );
        }
    };

    return (
        <div className="register-page">

            <div className="register-card">
                <div className="header">
                    <h1>Store Rating System</h1>
                </div>

                <h1>Create Account </h1>

                <p className="register-subtitle">
                    Register to continue
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value,
                            })
                        }
                    />

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
                        type="text"
                        placeholder="Enter Address"
                        value={form.address}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                address: e.target.value,
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
                        Register
                    </button>
                </form>

                <p className="login-text">
                    Already have an account?
                </p>

                <Link to="/login">
                    <button className="login-btn">
                        Login Now
                    </button>
                </Link>
            </div>
        </div>
    );
}