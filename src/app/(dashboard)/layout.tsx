import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-[260px] fixed inset-y-0 w-full">
        Navbar
      </div>

      <Sidebar />

      <main className="md:pl-[260px] pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
