import {Footer, Navbar} from "./features/common_elements/commons";
import {Outlet} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {selectLoginStatus} from "./features/auth";

export default function Layout() {

    return (
        <div>
            <Navbar />
            <Outlet/>
            <Footer />
        </div>
    )
}