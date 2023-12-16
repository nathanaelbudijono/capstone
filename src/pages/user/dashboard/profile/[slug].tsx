import * as React from "react";

import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import UserProfile from "@/components/pages/user/profile";
import { useAppStore } from "@/lib/store";
import Navbar from "@/modules/navbar";
import { useRouter } from "next/router";

const UserProfilePage = () => {
  const { getProfile, profile } = useAppStore();
  const router = useRouter();
  const id = router.query.slug as string;
  React.useEffect(() => {
    getProfile(id);
  }, [id]);
  return (
    <BaseLayout>
      <main className="bg-secondary-100 relative">
        <Seo templateTitle="Profile" />
        <Navbar />
        <Layout className="flex flex-col max-w-5xl">
          <UserProfile user={profile} />
        </Layout>
      </main>
    </BaseLayout>
  );
};

export default UserProfilePage;
