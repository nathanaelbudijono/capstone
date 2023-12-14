import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import DockIndex from "@/components/pages/user/dashboard/dock";
import Navbar from "@/modules/navbar";

const DockIndexPage = () => {
  return (
    <BaseLayout>
      <main className="bg-secondary-100 relative">
        <Seo templateTitle="Docks" />
        <Navbar />
        <Layout className="flex flex-col max-w-5xl">
          <DockIndex />
        </Layout>
      </main>
    </BaseLayout>
  );
};

export default DockIndexPage;
