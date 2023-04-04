import React from "react";
import Head from "next/head";
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Hero from '../pages/Hero';
import Meta from "./Meta";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Orban Robert</title>
                <Meta />
            </Head>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
export default Layout