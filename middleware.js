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

  //example-4
  return NextResponse.rewrite(new URL('/', request.url))
}

// "Matching Paths"
export const config = {
  matcher: ['/api', "/about"]
}

// Here, this config function is a next js utility function for middleware. 
