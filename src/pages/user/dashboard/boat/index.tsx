import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import UserBoat from "@/components/pages/user/dashboard/boat";
import Navbar from "@/modules/navbar";

const UserBoatPage = () => {
  return (
    <BaseLayout>
      <main className="bg-secondary-100 relative">
        <Seo templateTitle="Boats" />
        <Navbar />
        <Layout className="flex flex-col max-w-5xl">
          <UserBoat />
        </Layout>
      </main>
    </BaseLayout>
  );
};

export default UserBoatPage;
