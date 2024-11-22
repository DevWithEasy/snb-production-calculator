import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {

  return <div
    className='h-screen overflow-y-auto p-4 bg-gray-50'
  >
    <Header/>
    <Component {...pageProps} /> 
    <Toaster position="bottom-right"/>
  </div>
}
export default MyApp
