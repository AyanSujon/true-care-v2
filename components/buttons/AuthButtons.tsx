// "use client";

// import { signOut, useSession } from 'next-auth/react';
// import Link from 'next/link';
// import React from 'react';

// const AuthButtons = () => {
//     const session = useSession();
//     return (
//         <div>
//             {
//                 session.status =="authenticated"? (<><button onClick={()=> signOut()} >LogOut</button></>): (<><Link href="/login">Login</Link></>)
//             }
//             AuthButtons
//             {/* <Link href="/login">Login</Link> */}
//         </div>
//     );
// };

// export default AuthButtons;





"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

const AuthButtons = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <div className="flex gap-2">
      {status === "authenticated" ? (
        <Button
          onClick={() => signOut({ callbackUrl: "/" })}
          variant="ghost"
          size="sm"
          className="w-full hover:bg-[#6632ae] text-[#6632ae] hover:text-white transition-colors border border-[#6632ae]/30"
        >
          LogOut
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="w-full hover:bg-[#6632ae] text-[#6632ae] hover:text-white transition-colors border border-[#6632ae]/30"
        >
          <Link href="/login">Login</Link>
        </Button>
      )}
    </div>
  );
};

export default AuthButtons;
