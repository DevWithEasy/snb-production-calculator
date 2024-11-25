import React from 'react'
import dynamic from 'next/dynamic'
const AdminLayout = dynamic(() => import('../../components/admin/AdminLayout'))

export default function Admin() {
  return (
    <AdminLayout>
        <div>Admin</div>
    </AdminLayout>
  )
}
