import React from "react";
import BasicHeader from "../components/headers/BasicHeader";
import AdminLink from "../components/headers/AdminLink";
import CartLink from "../components/headers/CartLink";
import "./assets/Layouts.css";

const FullLayout = ({ children }) => {
    return (
    <div className="full-layout">
        <div className="top-bar">
            <BasicHeader />
            <CartLink />
            <AdminLink />
        </div>
        {children}
    </div>
    );
};

export default FullLayout;