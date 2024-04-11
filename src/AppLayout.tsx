import { Sidebar } from "lucide-react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="relative">
      Navbar
      <div className="flex">
        <Sidebar />
        Sidebar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  )
}

export default AppLayout
