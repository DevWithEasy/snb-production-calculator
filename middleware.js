import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request) {
  const cookie = request.cookies.get('authToken')
  const isPath = request.nextUrl.pathname

  // // Check if user is already on signin or signup page
  if (!cookie) {
    if (isPath === '/v2/login') {
      return NextResponse.next()
    }
  }
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(cookie.value, secret)

    return NextResponse.next()
    
  } catch (error) {
    return NextResponse.redirect(new URL('/v2/login', request.url))
  }
  
}

export const config = {
  matcher: [
    '/v2/login',
    '/admin',
    '/admin/users',
    '/admin/users/add',
    '/admin/sections',
    '/admin/products',
    '/v2/user-area/:section',
    '/v2/calculation/:section',
    '/v2/consumption/rm/:section',
    '/v2/consumption/pm/:section',
    '/v2/recieved/:field/:section',
    '/v2/recipe/:section',
    '/v2/update/:type/:field/:section',
  ],
}