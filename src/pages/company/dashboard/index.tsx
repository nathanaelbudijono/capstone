import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import DashboardCompany from "@/components/pages/company/dashboard";
import Navbar from "@/modules/navbar";

const CompanyDashboardPage = () => {
  return (
    <BaseLayout>
      <main className="bg-secondary-100 ">
        <Seo templateTitle="Admin Dashboard" />
        <Navbar />
        <Layout className="flex flex-col max-w-5xl">
          <DashboardCompany />
        </Layout>
      </main>
    </BaseLayout>
  );
};

export default CompanyDashboardPage;
