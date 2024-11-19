import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {

  return <div>
    <ChakraProvider>
     <Component {...pageProps} /> 
    </ChakraProvider>
    <Toaster position="top-right"/>
  </div>
}
export default MyApp
