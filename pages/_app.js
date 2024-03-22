import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute='class'>
            <Layout>
                <Component {...pageProps} />
                <Analytics />
            </Layout>
        </ThemeProvider>
    );
}