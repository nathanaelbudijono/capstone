import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import UserProfile from "@/components/pages/user/profile";
import Navbar from "@/modules/navbar";

const UserProfilePage = () => {
  return (
    <BaseLayout>
      <main className="bg-secondary-100 relative">
        <Seo templateTitle="Profile" />
        <Navbar />
        <Layout className="flex flex-col mt-2">
          <UserProfile />
        </Layout>
      </main>
    </BaseLayout>
  );
};

export default UserProfilePage;
