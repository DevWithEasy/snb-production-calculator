import { useRouter } from 'next/router';

import Image from 'next/image';
import { DashBoard } from '../components/Index';
import useUserStore from "../features/userStore";
import not_allow from '../public/not_allow.svg';


export default function Admin({}){
    const router = useRouter();
    const {user} = useUserStore()
    
    if(user.section != 'Admin'){
        return(
            <div className='text-center text-red-500 text-2xl'>
                <Image src={not_allow} alt='not_allow' height={300} width={300}/>
                <p>You are not allowed.</p>
            </div>
        )
    }else{
        return <DashBoard/>
    }
}