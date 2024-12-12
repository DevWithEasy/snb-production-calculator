import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { ImCross } from 'react-icons/im'
import { IoIosArrowRoundBack } from "react-icons/io"
import HeadInfo from '../../../../components/HeadInfo'
import CalculationTable from '../../../../components/v2/CalculationTable'
import ItemInOut from '../../../../components/v2/ItemInOut'
import Loading from '../../../../components/v2/Loading'
import getMonthDaysArray from '../../../../utils/v2/getMonthDaysArray'

export default function Recipe() {
  const router = useRouter()
  const section = router.query.section
  const [loading, setLoading] = useState(false)
  const [dateView, setDateView] = useState(true)
  const [start_date, setStart_date] = useState(null)
  const [end_date, setEnd_date] = useState(null)
  const [consumption, setConsumption] = useState({})
  const [inOut, setInOut] = useState({})
  const [unit, setUnit] = useState('')
  const [item, setItem] = useState('')
  const [view, setView] = useState(false)

  const getConsumption = async () => {
    if (!start_date || !end_date) return toast.error('শুরু এবং শেষের তারিখ দিন।')
    setLoading(true)
    setDateView(false)
    try {
      const { data } = await axios.get(`/api/v2/daily_rmpm/calculation?section=${section}&start_date=${start_date}&end_date=${end_date}`)

      if (data.success) {
        setLoading(false)
        setConsumption(data.data)
      }
    } catch (error) {
      setLoading(false)
      setDateView(true)
    }
  }

  return (
    <>
      <HeadInfo title={`Stock Calculation - ${section}`} />
      <div
        className=' bg-gray-50'
      >
        {
          dateView &&
          <div
            className='absolute left-0 top-0 px-4 md:px-0 h-screen w-full flex justify-center items-center bg-gray-500/50'
          >
            <div
              className='relative w-9/12 md:w-4/12 p-4 flex flex-col space-y-2 bg-white rounded-lg'
            >
              {consumption?.header && <ImCross onClick={() => setDateView(!dateView)} className='absolute -top-5 right-2 text-red-500' />}
              <select
                value={start_date}
                onChange={(e) => setStart_date(e.target.value)}
                className='p-2 rounded-lg focus:outline-none border'
              >
                <option value={null}>From Date</option>
                {
                  getMonthDaysArray().map(day => (
                    <option key={day.value} value={day.value}>{day.title}</option>
                  ))
                }
              </select>
              <select
                value={end_date}
                onChange={(e) => setEnd_date(e.target.value)}
                className='p-2 rounded-lg focus:outline-none border'
              >
                <option value={null}>To Date</option>
                {
                  getMonthDaysArray().map(day => (
                    <option key={day.value} value={day.value}>{day.title}</option>
                  ))
                }
              </select>
              <button
                className='p-2 bg-blue-500 text-white rounded-lg'
                onClick={getConsumption}
              >
                Submit
              </button>
            </div>
          </div>
        }
        {
          consumption.header &&
          <div
            className='container md:max-w-3xl md:mx-auto space-y-2 bg-white'
          >
            <div
              className='pt-2 px-2 flex items-center justify-between'
            >
              <IoIosArrowRoundBack size={30} className='cursor-pointer' onClick={() => router.back()} />
              <button
                className='px-2 py-1 border rounded-lg text-sm'
                onClick={() => setDateView(!dateView)}
              >
                {`(${start_date}-${end_date}) `}Date Change
              </button>
            </div>
            <div
              className='w-full overflow-x-auto'
            >
              <CalculationTable
                headers={consumption.header}
                rows={consumption.rm}
                section={section}
                setItem={setItem}
                setView={setView}
                setInOut={setInOut}
                setUnit={setUnit}
                setLoading={setLoading}
              />
              <CalculationTable
                headers={consumption.header}
                rows={consumption.pm}
                setItem={setItem}
                section={section}
                setView={setView}
                setInOut={setInOut}
                setUnit={setUnit}
                setLoading={setLoading}
              />
            </div>
          </div>
        }

        {view &&
          <ItemInOut
            setView={setView}
            inOut={inOut}
            unit={unit}
            item={item}
          />}

        {loading && <Loading />}
      </div>
    </>

  )
}
