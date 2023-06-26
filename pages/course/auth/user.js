import React from 'react'
import Link from 'next/link'

import { useAuth } from '@/hooks/use-auth'

export default function User() {
  const { auth } = useAuth()

  return (
    <>
      <h1>User</h1>
      <p>id: {auth.id}</p>
      <p>name: {auth.name}</p>
      <hr />
      <Link href="/course/auth/login">User頁</Link>
    </>
  )
}