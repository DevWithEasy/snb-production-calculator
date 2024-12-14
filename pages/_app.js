import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import appStore from '../features/appStore';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const {app_user} = appStore()
  const isHeader = router.pathname.split('/').pop() === 'login' || router.pathname==='/' ? true : false

    useEffect(()=>{
        if(app_user.role === 'admin'){
            router.push('/admin')
        } else if(app_user.role === 'user'){
            router.push('/v2/user-area/' + app_user.section.toLowerCase())
        }else{
          router.push('/v2/login')
        }
    },[router,app_user.role,app_user.section])

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
