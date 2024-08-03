import React from "react";
import "./assets/Layouts.css";

const AuthLayout = ({ children }) => {
    return (
    <div className="auth-layout">
        {children}
    </div>
    );
};

export default AuthLayout;