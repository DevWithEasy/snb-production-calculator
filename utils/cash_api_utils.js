import baseUrl from "./baseUrl"

export const createCashEntry=async(data) =>{
    try {
      const res = await axios.post(`${baseUrl}/api/cash/create`,data)
      if(res.data.status === 200){
        setProducts(res.data.data)
        if(res.data.data.length === 0){
          toast.error('There was no another version available.')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }