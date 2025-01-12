import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ImCross } from 'react-icons/im';

export default function MonthSeclectView({ setMonthView ,getDemand}) {
  const date = new Date();
  const currentMonth = date.getMonth()
  const currentYear = date.getFullYear()
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  const [year, setYear] = useState(currentYear)
  const [month, setMonth] = useState(months[currentMonth])

  const handleYear = (increment = true) => {
    increment ? setYear(year => year + 1) : setYear(year => year - 1)
  }
  return (
    <div
      className='fixed left-0 top-0 h-screen w-full flex justify-center items-center bg-slate-100/50'
    >
      <div
        className='relative flex flex-col items-center bg-white p-4 rounded-md text-sm'
      >
        <button
          className='absolute -right-2 -top-2 bg-white p-1 text-red-500 rounded-full'
          onClick={() => setMonthView(false)}
        >
          <ImCross />
        </button>
        <div
          className='space-y-3'
        >
          <div
            className='w-full flex justify-between items-center'
          >
            <FaArrowLeft onClick={() => handleYear(false)} />
            <span>{year}</span>
            <FaArrowRight onClick={() => handleYear()} />
          </div>
          <div
            className='grid grid-cols-3 gap-2'
          >
            {
              months.map(mon => (
                <button
                  key={mon}
                  onClick={() => getDemand(month,year)}
                  className={`border border-gray-300 px-4 py-1 text-gray-800 rounded-md ${month === mon ? 'bg-gray-200' : ''}`}
                >
                  {mon.slice(0, 3)}
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
