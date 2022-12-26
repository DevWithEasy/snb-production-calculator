import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return <div className='relative'>
    <Header/>
    <Component {...pageProps} />
    <Toaster/>
  </div>
}
export default MyApp
