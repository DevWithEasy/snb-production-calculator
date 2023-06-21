import { useRouter } from 'next/router';
import DashBoard from '../components/dashboard/DashBoard';
import useUserStore from "../features/userStore";


export default function Admin({}){
    const router = useRouter();
    const {user} = useUserStore()
    
    if(user.section != 'Admin'){
        return(
            <div>
                <p>You are not allowed to</p>
            </div>
        )
    }else if(!user.name){
        return router.push('/')
    }else{
        return <DashBoard/>
    }
}