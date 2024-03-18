import React from "react";
import Head from "next/head";
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Hero from '../pages/Hero';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Orban Robert</title>
                <meta name="title" content="Orban Robert - Software Developer"></meta>
                <meta name="description" content="My personal website and portifolio."></meta>
                <meta name="keywords" content="developer, front-end, programmer, portifolio, nextjs, react, tailwind"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
                <meta name="language" content="English"></meta>
                <link rel="icon" href="https://i.imgur.com/jF9wiw2.png" />
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