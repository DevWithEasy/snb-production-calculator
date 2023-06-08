import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
const userStore = (set)=>({
    user : {},
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