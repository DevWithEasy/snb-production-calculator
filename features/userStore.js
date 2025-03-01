import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
const userStore = (set)=>({
    user : {},
    demand : [],
    users : [],
    sections : [],
    products : [],
    cashEntries : [],
    active : 0,
    loading : false,
    setLoading : () =>{
        set((state)=>({
            loading : !state.loading,
        }))
    },
    addDemand : (data) =>{
        set((state)=>({
            demand : [...state.demand,data]
        }))
    },
    removeDemand : (id) =>{
        set((state)=>({
            demand : state.demand.filter((item)=>item.id!==id)
        }))
    },
    resetDemand : () =>{
        set((state)=>({
            demand : []
        }))
    },
    adminData : (data) =>{
        set((state)=>({
            users : data.users,
            sections : data.sections,
            products : data.products,
        }))
    },
    addAdminData : (data,area) =>{
        if(area == 'user'){
            return set((state)=>({
                users : [...state.users, data],
            }))
        }else if(area == 'section'){
            return set((state)=>({
                sections : [...state.sections, data],
            }))
        }else if(area == 'product'){
            return set((state)=>({
                products : [...state.products,data], 
            }))
        }
        
    },
    adminData : (data) =>{
        set((state)=>({
            users : data.users,
            sections : data.sections,
            products : data.products,
        }))
    },
    updateAdminData : (data,area) =>{
        if(area == 'user'){
            return set((state)=>({
                users : data
            }))
        }else if(area == 'section'){
            return set((state)=>({
                sections : data
            }))
        }else if(area == 'product'){
            return set((state)=>({
                products : data
            }))
        }
        
    },
    removeAdminData : (id,area) =>{
        if(area == 'user'){
            return set((state)=>({
                users : state.users.filter((user)=>user.id != id),
            }))
        }else if(area == 'section'){
            return set((state)=>({
                sections : state.section.filter((section)=>section.id != id)
            }))
        }else if(area == 'product'){
            return set((state)=>({
                products : state.products.filter((product)=>product.id != id)
            }))
        }
    },
    setActive : (value) =>{
        set((state)=>({
            active : value
        }))
    },
    loged : (userData) =>{
        set((state)=>({
            user : userData
        }))
    },
    addEntries : (data) =>{
        set((state)=>({
            cashEntries : data
        }))
    },
    newEntries : (data)=>{
        set((state)=>({
            cashEntries : [data,...state.cashEntries]
        }))
    },
    updateEntries : (data)=>{
        set((state)=>({
            cashEntries : [data,...state.cashEntries.filter(entry=>entry._id !== data._id)]
        }))
    },
    deleteEntries : (id)=>{
        set((state)=>({
            cashEntries : state.cashEntries.filter(entry=> entry._id !== id)
        }))
    },
    logout : () =>{
        set((state)=>({
            user : {}
        }))
    }
})
const useUserStore = create(
    devtools(
        persist(userStore,{
            name : "user",
        })
    )
)
export default useUserStore;