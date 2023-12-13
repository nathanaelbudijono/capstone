import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import UserDashboard from "@/components/pages/user/dashboard";
import Navbar from "@/modules/navbar";

const UserDashboardPage = () => {
  return (
    <BaseLayout>
      <main className="h-screen bg-secondary-100">
        <Seo templateTitle="Dashboard" />
        <Navbar />
        <Layout className="flex flex-col max-w-5xl  pl-5 pr-0">
          <UserDashboard />
        </Layout>
      </main>
    </BaseLayout>
  );
};

export default UserDashboardPage;