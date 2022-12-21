import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/Layout'

export default function Unauthorised() {
    const router = useRouter();
    const { message } = router.query;
    console.log(router);
  return (
    <Layout title="Unauthorised Page">
        <h1 className='Access Denied'>Access Denied</h1>
        {message && <div className='mb-4 text-red-500'>{message}</div>}
    </Layout>
  )
}
