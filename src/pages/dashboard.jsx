import sidebar from "../components/sidebar";
import mainContent from "../components/mainContent";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}
