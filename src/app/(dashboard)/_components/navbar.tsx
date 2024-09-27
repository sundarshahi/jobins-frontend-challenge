import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";

const Navbar = () => {
  return (
    <div className="py-3 h-full flex items-center gap-[10px] shadow-[0px_2px_4px_0px_#A5A3AE4D]">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
