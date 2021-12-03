import {Footer, Navbar} from "./features/common_elements/commons";
import {Outlet} from "react-router-dom";
import React from "react";


export default function Layout() {

    return (
        <div>
            <Navbar />
            <Outlet/>
            <Footer />
        </div>
    )
}
