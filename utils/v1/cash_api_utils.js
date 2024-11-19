import axios from "axios"
import baseUrl from "./baseUrl"

export const getAllCashEntries = async (setEntries) => {
  try {
    const res = await axios.get(`${baseUrl}/api/cash`)
    if (res.data.status === 200) {
      setEntries(res.data.data)
    }
  } catch (error) {
    console.log(error)
  }
}

export const createCashEntry = async (data,newEntries,handleClose) => {
  try {
    const res = await axios.post(`${baseUrl}/api/cash/create`, data)
    if (res.data.status === 200) {
      newEntries(data)
      handleClose()
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateCashEntry = async (data,updateEntry,setView) => {
  try {
    const res = await axios.put(`${baseUrl}/api/cash/update/${data._id}`, data)
    if (res.data.status === 200) {
      updateEntry(data)
      setView('')
    }
  } catch (error) {
    console.log(error)
  }
}

export const deleteCashEntry = async (id,deleteEntry,serView) => {
  try {
    const res = await axios.delete(`${baseUrl}/api/cash/delete/${id}`)
    if (res.data.status === 200) {
      deleteEntry(id)
      serView('')
    }
  } catch (error) {
    console.log(error)
  }
}