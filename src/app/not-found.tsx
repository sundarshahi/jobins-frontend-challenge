import Navbar from "@/app/(dashboard)/_components/navbar";
import { Sidebar } from "@/components/sidebar/sidebar";

function NotFoundPage() {
  return (
    <div className="h-full">
      <div className="h-[62px] md:pl-[260px] fixed inset-y-0 w-full">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-[260px] flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      <main className="md:pl-[260px] pt-[80px] h-full">
        <div>Page not found</div>
      </main>
    </div>
  );
}

export default NotFoundPage;
