import Image from 'next/image';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import logo from '../public/emoji.png';
import '../styles/globals.css';
import Link from 'next/link';
import appStore from '../features/appStore';

function MyApp({ Component, pageProps }) {
  const { app_user } = appStore()
  const router = useRouter()
  const isHeader = router.pathname.split('/').pop() === 'login' || router.pathname === '/' ? true : false

  return <div
    className='relative h-screen bg-gray-50'
  >
    {
      !isHeader && <Header />
    }
    <div
      className='h-[calc(100%-96px)] overflow-y-auto p-2'
    >
      <Component {...pageProps} />
    </div>
    {
      !app_user.username &&  !isHeader &&<div
        className='absolute h-screen w-full top-0 bg-gray-500/80 flex justify-center items-center'
      >
        <div
          className='flex flex-col items-center text-white'
        >
          <Image
            alt='logo'
            src={logo}
            height={50}
            width={50}
          />
          <p>উহঃ মুরুব্বি...</p>
          <p>
            আগে
            <Link href='/v2/login'>
              <span className='mx-1 bg-gray-400 '> লগ-ইন </span>
            </Link>
            করুন
          </p>

        </div>
      </div>
    }

    <Toaster position="bottom-right" />
  </div>
}
export default MyApp
