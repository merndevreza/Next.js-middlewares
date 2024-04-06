import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {

  //example-1
  // return NextResponse.json({
  //   message: "hello",
  // });

  //example-2
  // return NextResponse.next()

  //example-3
  // if (request.url.includes("api"))  return NextResponse.redirect(new URL('/', request.url))
  // return NextResponse.next()
  return NextResponse.rewrite(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api', "/about"]
}

// Here, this config function is next js utility function for middleware. 
