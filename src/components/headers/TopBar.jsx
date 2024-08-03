import React from "react";
import BasicHeader from "./BasicHeader";
import AdminLink from "./AdminLink";
import CartLink from "./CartLink";
import "./assets/Headers.css";

const TopBar = () => {
    return (
        <div className="top-bar">
            <BasicHeader />
            <CartLink />
            <AdminLink />
        </div>
    );
};

export default TopBar;
