import React from 'react'
import Link from 'next/link'

import { useAuth } from '@/hooks/use-auth'

export default function Login() {
  const { auth, setAuth } = useAuth()

  return (
    <>
      <h1>Login</h1>
      目前登入: {auth.id > 0 ? '已登入' : '尚未登入'}
      <button
        onClick={() => {
          setAuth({ id: 123, name: 'eddy', token: 'xxx' })
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          setAuth({ id: 0, name: '0', token: '' })
        }}
      >
        登出
      </button>
      <hr />
      <Link href="/course/auth/user">User頁</Link>
    </>
  )
}