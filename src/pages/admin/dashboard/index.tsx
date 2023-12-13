import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import AdminDashboard from "@/components/pages/admin/dashboard";
import Navbar from "@/modules/navbar";

const AdminDashboardPage = () => {
  return (
    <main>
      <Seo templateTitle="Admin Dashboard" />
      <Navbar />
      <Layout className="flex flex-col h-screen bg-red-200">
        <AdminDashboard />
      </Layout>
    </main>
  );
};

export default AdminDashboardPage;
