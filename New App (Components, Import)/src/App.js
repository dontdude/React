import React from "react";

import NavBar from "./NavbarComponent"
import Footer from "./FooterComponent"
import Header from "./HeaderComponent"
import App from "./AppComponent"
import Card from "./CardComponent"

const app = () => {
    return(
        <div>
            <NavBar />
            <Header />
            <App />
            <Card />
            <Footer />
        </div>
    );
};

export default app;