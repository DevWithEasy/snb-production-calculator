import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return <div className='relative'>
    <Header/>
    <ChakraProvider>
     <Component {...pageProps} /> 
    </ChakraProvider>
    <Toaster/>
  </div>
}
export default MyApp
