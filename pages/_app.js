import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isHeader = router.pathname.split('/').pop() === 'login' || router.pathname==='/' ? true : false 
  return <div
    className='h-screen overflow-y-auto bg-gray-50'
  >
    {
      !isHeader  && <Header/>
    }
    <div
      className='h-[calc(100%-96px)] overflow-y-auto p-2'
    >
      <Component {...pageProps} />
    </div>
    <Toaster position="bottom-right"/>
  </div>
}
export default MyApp
