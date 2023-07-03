import { NavLink, useNavigate } from "@remix-run/react";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/remix";

export default function Header() {
    const navigate = useNavigate()
  return (
    <header className="flex justify-around p-3 items-center text-white font-semibold">
      <NavLink to={"/"}>Home</NavLink>
      <SignedOut>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Log In</NavLink>
      </SignedOut>
      <SignedIn>
        <NavLink to={"/todos"}>My todos</NavLink>
        <SignOutButton signOutCallback={()=>navigate('/')}/>
      </SignedIn>
    </header>
  );
}
