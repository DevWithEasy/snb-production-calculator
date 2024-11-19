import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
const userStore = (set)=>({
    user : {},
    loading : false,
    message : '',
    message_type : '',
    setLoading : () =>{
        set((state)=>({
            loading : !state.loading,
        }))
    },
    setMessage : (type='',message='') =>{
        set((state)=>({
            message : message,
            message_type : type
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
const appStore = create(
    devtools(
        persist(userStore,{
            name : "app",
        })
    )
)
export default appStore;