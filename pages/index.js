import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, ChakraProvider, Center, ThemeProvider, Text, theme, Container } from '@chakra-ui/react'
import Layout from '@/components/layout/layout'
import Navbar from '../components/navbar'
import WCard from '@/components/card'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>  
        <Container width={"100"}> 
        <Navbar/>
        <WCard />
        </Container>
  </>
  )
}
