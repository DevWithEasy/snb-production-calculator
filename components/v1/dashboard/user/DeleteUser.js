import axios from 'axios'
import { useRef } from 'react'
import useUserStore from '../../../../features/userStore'

export default function DeleteUser({ user }) {
  const { removeAdminData } = useUserStore()
  const cancelRef = useRef()

  const deleteUser = async () => {
    try {
      const res = await axios.delete(`/api/user/delete_user?id=${user.id}`)
      if (res.data.status === 200) {
        removeAdminData(user.id, 'user')
        onClose()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button colorScheme='red' onClick={() => deleteUser()} ml={3}>
        Delete
      </button>
    </>
  )
}