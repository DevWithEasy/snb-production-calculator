import Head from 'next/head';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { Login, Section } from "../../components/v1/Index";
import useUserStore from '../../features/userStore';
import Link from 'next/link';

export default function Home() {
  const router = useRouter()
  const {user} = useUserStore()
  if(user.section == 'Admin'){
    router.push('/v1/admin')
  }

  return (
      <>
        {user.username ? <Section {...user}/>
        
        : 
        <div className="h-[calc(100%-128px)] w-full flex justify-center items-center font-bangla">
          <div
            className='bg-white p-4 rounded-lg border tracking-widest text-sm'
          >
            <p>বর্তমানে এই সফটওয়্যারের দুইটি ভার্সন আছে। আপনি বর্তমানে 
              <span className='inline-block bg-red-500 text-white skew-y-2 p-1 mx-2'>ভার্সন-১.০</span> 
            তে আছেন। আর এটি ব্যবহার করতে আপনাকে লগ-ইন করতে হবে</p>
            <div
              className='py-4 space-x-2'
            >
              <Link href='v1/login'>
                <p className='px-4 py-2 rounded-lg bg-gray-500 text-white inline-block text-sm'>ভার্সন-১.০</p>
              </Link>
              <Link href='v1/login'>
                <p className='px-4 py-2 rounded-lg bg-blue-500 text-white inline-block text-sm'>ভার্সন-২.০</p>
              </Link>
            </div>
            <p className='text-red-500'>
              ভার্সন-২.০ ব্যবহার করবেন। এটিতে সমস্যা দেখা দিলে ভার্সন ১.০ ব্যবহার করবেন।
            </p>
          </div>
        </div>
        }
        
      </>
  )
}
