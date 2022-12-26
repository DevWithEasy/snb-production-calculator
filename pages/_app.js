import Header from '../components/Header';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return <div className='relative'>
    <Header/>
    <Component {...pageProps} />
    <Toaster/>
  </div>
}
export default MyApp
