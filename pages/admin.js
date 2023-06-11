import { useRouter } from "next/router";
import { useState } from "react";
import toast from 'react-hot-toast';
import DashBoard from '../components/DashBoard';
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