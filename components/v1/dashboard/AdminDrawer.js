import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import useUserStore from '../../../features/userStore';

const AdminDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const router = useRouter()
    const {active,setActive,logout} = useUserStore()
    const logoutUser =()=>{
        logout()
        router.push("/")
    }
    const actives = ['Dashboard', 'Recipes', 'Users', 'Products']
    return (
        <>
        <AiOutlineMenu 
            ref={btnRef}  
            onClick={onOpen}
            className='md:hidden absolute top-1.5'
        />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Admin DashBoard</DrawerHeader>

          <DrawerBody>
            {
                actives.map((item,index)=><button
                    key={index}
                    onClick={()=>{setActive(index);onClose()}}
                    className={`block w-full p-2 border-b text-left hover:bg-blue-50 ${active == index ? 'bg-blue-50' : ''}`}
                >
                    {item}
                </button>)
            }
            <button
                onClick={()=>logoutUser()}
                className={`block w-full p-2 border-b text-left hover:bg-red-100 `}
            >
                Logout
            </button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
    );
};

export default AdminDrawer;