import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from 'react-icons/ai';
import useUserStore from "../features/userStore";

export default function Section(props){
  const {name,username,section} = props;
  const {logout} = useUserStore()
  const router = useRouter()

  if(username === 'Admin'){
    router.push("/admin")
  }
  const logoutUser =()=>{
    logout()
    router.push("/")
  }
    return (
        <div className=''>
          <div className="text-center p-2  bg-gray-100">
            <h1 className="font-bold text-2xl">{section}</h1>
            <p className="">{name} ({username})</p>
            <AiOutlineLogout 
              onClick={()=>logoutUser()} 
              className="cursor-pointer hover:text-red-500 mx-auto mt-2"
            />
              
          </div>
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