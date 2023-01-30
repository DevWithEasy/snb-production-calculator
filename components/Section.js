import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { logout } from "../features/slice/userSlice";

export default function Section(props){
  const {username,section} = props;
  const dispatch = useDispatch()
  const router = useRouter()
  const logoutUser =()=>{
    dispatch(logout())
    router.push("/")
  }
    return (
        <div className=''>
          <h1 className="relative text-center p-2 font-bold text-2xl bg-gray-100">
            {section}
            <AiOutlineLogout onClick={()=>logoutUser()} className="absolute top-3 right-3 cursor-pointer hover:text-red-500"/>
          </h1>
          <Link href={`/recipe/${username}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>Recipe</a>
          </Link>
          <Link href={`/consumption/rm/${username}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>RM Calcutation</a>
          </Link>
          <Link href={`/consumption/pm/${username}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>PM Calcutation</a>
          </Link>
          <Link href={`/monthly_demand/${username}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>Monthly Demand</a>
          </Link>
        </div>
    )
}