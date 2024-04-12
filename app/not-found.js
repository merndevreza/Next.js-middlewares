"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NotFound = () => {
   const pathName=usePathname()
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested page, {pathName}</p>
      <Link className="bg-green-400 px-3 py-1 rounded" href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
/**
 * By default, not-found page should be a server component. But we can make it client component if necessary (e.g- using hook inside it)
 * We can make it async component, if we need to fetch data, 
 * We can show conditionally dynamic routes's not found page
*/