import axios from "axios"

export const addField=async(id)=>{
    try {
        const res = await axios.post(`/api/db_apply?id=${id}`)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const getProduct=async(e,id,carton,setId,setCarton,demand,addDemand,toast,setLoading)=>{
    e.preventDefault()

    if(!id || !carton){
        return toast.error('Feild Empty')
    }
    setLoading(true)
    try {
        const res = await axios.get(`/api/item_demand/?id=${id}&carton=${carton}`)

        const find = demand.find(product => product.id === res.data.data.id)
        if(find){
            setLoading(false)
            return toast.error( `${find.name} is already added.`)
        }else{
            setLoading(false)
            setId('')
            setCarton('')
            addDemand(res.data.data)
        }
        
    } catch (error) {
        setLoading(false)
        console.log(error)
    }

}
