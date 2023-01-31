import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { logout } from "../features/slice/userSlice";

export default function Section(props){
  const {name,username,section} = props;
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
            <div className="absolute top-3 right-3 flex items-center space-x-2">
              <span className="text-xs">Hello {name}</span>
              <AiOutlineLogout onClick={()=>logoutUser()} className="cursor-pointer hover:text-red-500"/>
            </div>
          </h1>
          <Link href={`/recipe/${section.toLowerCase()}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>Recipe</a>
          </Link>
          <Link href={`/consumption/rm/${section.toLowerCase()}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>RM Calcutation</a>
          </Link>
          <Link href={`/consumption/pm/${section.toLowerCase()}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>PM Calcutation</a>
          </Link>
          <Link href={`/monthly_demand/${section.toLowerCase()}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>Monthly Demand</a>
          </Link>
        </div>
    )
}