import Head from 'next/head';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Login from '../components/Login';
import Section from '../components/Section';

export default function Home() {
  const router = useRouter()
  const user = useSelector(state=>state.user.user)
  if (user?.section === 'Admin') {
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
        {user.username && <Section {...user}/>}
      </div>
      {!user.username && <Login/>}
      <Toaster/>
    </div>
  )
}
