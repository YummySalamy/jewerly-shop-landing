import React, { useState, useEffect } from "react";
import { FaUserCircle, FaGoogle } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./assets/Auth.css";

const AuthLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            window.location.href = "/";
        }
    }, []);

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.error) {
                setError(data.error);
            } else {
                localStorage.setItem("token", data.token);
                window.location.href = "/";
            }
        } catch (error) {
            setError("Ocurrió un error");
        }
        setLoading(false);
    };

    return (
        <div className="auth-login">
            <div className="auth-login-header">
                <h1>Iniciar Sesión</h1>
            </div>
            <div className="auth-login-form">
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="auth-login-buttons">
                {loading ? (
                    <AiOutlineLoading className="loading" />
                ) : (
                    <button className="auth-button" onClick={handleLogin}>Iniciar Sesión</button>
                )}
                <button className="google-login">
                    <FaGoogle />
                    Iniciar sesión con Google
                </button>
            </div>
            {error && <p className="error">{error}</p>}
            {/* <Link to="/auth/register">Registrarse</Link> */}
        </div>
    );
}

export default AuthLogin;