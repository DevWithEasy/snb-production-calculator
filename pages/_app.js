import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return <>
    <Component {...pageProps} /> 
    <Toaster position="bottom-right"/>
  </>
}
export default MyApp
