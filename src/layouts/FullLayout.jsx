import React from "react";
import BasicHeader from "../components/headers/BasicHeader";
import "./assets/Layouts.css";

const FullLayout = ({ children }) => {
    return (
    <div className="full-layout">
        <BasicHeader />
        {children}
    </div>
    );
};

export default FullLayout;