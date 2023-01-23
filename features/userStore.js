import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
const userStore = (set)=>({
    user : {},
    loginData : (userData) =>{
        set((state)=>({
            user : userData
        }))
    },
    logoutData : () =>{
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