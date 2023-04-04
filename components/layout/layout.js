import styles from './layout.module.css'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
export default function Layout({ children }) {
    return (
      <>
        <Box >
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Robert's Homepage" />
          </Head>
          </Box>
      </>
    )
  }