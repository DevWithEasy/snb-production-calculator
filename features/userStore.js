import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
const userStore = (set)=>({
    user : {},
    demand : [],
    users : [],
    sections : [],
    products : [],
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
    loged : (userData) =>{
        set((state)=>({
            user : userData
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