import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isHeader = router.pathname.split('/').pop() !== 'login' ? false : true 
  return <div
    className='h-screen overflow-y-auto p-4 bg-gray-50'
  >
    {
      isHeader  && <Header/>
    }
    <Component {...pageProps} /> 
    <Toaster position="bottom-right"/>
  </div>
}
export default MyApp
