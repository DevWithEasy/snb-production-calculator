import Head from 'next/head';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { Login, Section } from "../components/Index";
import useUserStore from '../features/userStore';

export default function Home() {
  const router = useRouter()
  const {user} = useUserStore()
  if(user.section == 'Admin'){
    router.push('/admin')
  }

  return (
    <div className='index flex justify-center'>
      <Head>
        <title>S&B Nice Food Valley Ltd.</title>
        <meta name="description" content="S&B Nice Food Valley Ltd." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='w-full mx-4 md:w-1/2 p-2 mt-10 border rounded-md shadow-lg space-y-2'>
        {user.username ? <Section {...user}/> : <Login/>}
      </div>
      <Toaster/>
    </div>
  )
}
