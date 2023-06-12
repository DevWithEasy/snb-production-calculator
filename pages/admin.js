import DashBoard from '../components/dashboard/DashBoard';
import useUserStore from "../features/userStore";


export default function Admin({}){
    const {user} = useUserStore()
    
    if(user.section != 'Admin'){
        return(
            <div>
                <p>You are not allowed to</p>
            </div>
        )
    }else{
        return <DashBoard/>
    }
}