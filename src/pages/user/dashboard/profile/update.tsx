import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import UserUpdateProfile from "@/components/pages/user/profile/update";
import Navbar from "@/modules/navbar";

const UserProfileUpdatePage = () => {
  return (
    <BaseLayout>
      <main className="bg-secondary-100 relative">
        <Seo templateTitle="Update Profile" />
        <Navbar />
        <Layout className="flex flex-col mt-2">
          <UserUpdateProfile />
        </Layout>
      </main>
    </BaseLayout>
  );
};

export default UserProfileUpdatePage;
