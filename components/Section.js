import Link from "next/link";

export default function Section(props){
  const {username,section} = props;
    return (
        <div className=''>
          <h1 className="text-center p-2 font-bold text-2xl bg-gray-100">{section}</h1>
          <Link href={`/recipe/${username}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>Recipe</a>
          </Link>
          <Link href={`/rm/${username}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>RM / PM Calcutation</a>
          </Link>
          <Link href={`/monthly_demand/${username}`}>
            <a className='block p-2 border-b text-blue-500 text-xl'>Monthly Demand</a>
          </Link>
        </div>
    )
}