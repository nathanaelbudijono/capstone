import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import UserNewBoat from "@/components/pages/user/dashboard/boat/new";
import Navbar from "@/modules/navbar";

const UserNewBoatPage = () => {
  return (
    <main className="bg-secondary-100">
      <BaseLayout>
        <Seo templateTitle="Create new boat" />
        <Navbar />
        <Layout className="flex flex-col max-w-5xl items-center">
          <UserNewBoat />
        </Layout>
      </BaseLayout>
    </main>
  );
};

export default UserNewBoatPage;
