import { SignInButton, SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useCartStore } from "@/store";
import Cart from "./Cart";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      <a
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        Sup Store
      </a>
      <div className="flex items-center gap-8">
        <Cart />
        <div>
          <SignInButton>
            <UserButton />
          </SignInButton>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="border rounded-md border-x-gray-400 px-3 py-2">
                Fazer Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
