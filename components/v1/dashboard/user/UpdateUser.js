import axios from 'axios'
import { useState } from 'react'
import useUserStore from '../../../../features/userStore'
import handleInput from '../../../../utils/v1/handleInput'

export default function UpdateUser({ user, sections }) {
  const { updateAdminData } = useUserStore()
  const [value, setValue] = useState(user)
  const updateUser = async () => {
    try {
      const res = await axios.post(`/api/user/update_user?id=${user.id}`, value)
      if (res.data.status === 200) {
        updateAdminData(res.data.data, 'user')
        onClose()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <label>Name :</label>
      <input
        name='name'
        value={value?.name}
        onChange={(e) => handleInput(e, value, setValue)}
      />
      <label>Username :</label>
      <input
        name='username'
        value={value?.username}
        onChange={(e) => handleInput(e, value, setValue)}
      />
      <label>Password :</label>
      <input
        name='password'
        value={value?.password}
        onChange={(e) => handleInput(e, value, setValue)}
      />
      <label>Section :</label>
      <select
        name='section'
        value={value?.section}
        onChange={(e) => handleInput(e, value, setValue)}
      >
        {sections.map(section => <option key={section.id} value={section.name}>{section.name}</option>)}
      </select>
      <button colorScheme='blue' onClick={() => updateUser()}>Submit</button>
    </>
  )
}