import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
const userStore = (set)=>({
    user : {},
    demand : [],
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