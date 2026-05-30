import { Link, Outlet } from "react-router";
import logo from "@/assets/logo.png";
import defaultAvatar from "@/assets/default-avatar.png";
import { SunIcon } from "lucide-react";

export default function GlobalLayout() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <header className="h-15 border-b">
        <div className="m-auto flex h-full max-w-175 items-center justify-between px-4">
          <div className="">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hover:bg-muted rounded-full">
              <SunIcon />
            </div>
            <div>
              <img className="w-6" src={defaultAvatar} alt="default Avatar" />
            </div>
          </div>
        </div>
      </header>
      <main className="m-auto w-full max-w-175 flex-1 border-x px-4 py-6">
        <Outlet />
      </main>
      <footer className="h-15 border-t">
        <div className="m-auto flex h-full max-w-175 items-center justify-center px-4">
          <span className="text-muted-foreground text-sm">@YulBuff</span>
        </div>
      </footer>
    </div>
  );
}
