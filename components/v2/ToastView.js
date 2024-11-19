import React from 'react'
import appStore from '../../features/appStore'
import { CgSpinner } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";
import { TbCircleXFilled } from "react-icons/tb";

export default function ToastView() {
    const {message,message_type} = appStore()
    const color_shadow = message_type === 'pending' ?
    'shadow-gray-200' : message_type === 'success'? 'shadow-green-500' : message_type === 'error'? 'shadow-red-500' : ''
    const icon = message_type === 'pending' ?
    <CgSpinner size={16} className='animate-spin'/> : 
    message_type === 'success'? 
    <FaCheckCircle className='text-green-500'/> : 
    message_type === 'error'? 
    <TbCircleXFilled className='text-red-500'/> : null
  return (
    <div
        className={`absolute top-2 right-3 px-2 py-1 flex space-x-1 items-center rounded border shadow-sm ${color_shadow}`}
    >
        {icon}
        <p>{message}</p>
    </div>
  )
}
