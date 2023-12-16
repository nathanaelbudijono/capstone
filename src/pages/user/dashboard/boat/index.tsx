import * as React from "react";

import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import UserBoat from "@/components/pages/user/dashboard/boat";
import { useAppStore } from "@/lib/store";
import { validateUser } from "@/lib/validation/user-validation";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";
import { userType } from "@/lib/slices/user-slices";

const UserBoatPage = ({ user }: { user: userType }) => {
  const { getUserBoat, boats } = useAppStore();
  React.useEffect(() => {
    getUserBoat(user?.id);
  }, []);
  console.log(boats);
  return (
    <BaseLayout>
      <main className="bg-secondary-100 relative">
        <Seo templateTitle="Boats" />
        <Navbar />
        <Layout className="flex flex-col max-w-5xl">
          {/* @ts-ignore */}
          <UserBoat boats={boats} />
        </Layout>
      </main>
    </BaseLayout>
  );
};

export default UserBoatPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await validateUser(ctx);
}
