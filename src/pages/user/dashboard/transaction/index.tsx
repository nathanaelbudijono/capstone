import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import BaseLayout from "@/components/layout/sidebar-layout";
import UserTransaction from "@/components/pages/user/dashboard/transaction";
import Navbar from "@/modules/navbar";

const UserTransactionPage = () => {
  return (
    <BaseLayout>
      <main className="bg-secondary-100 ">
        <Seo templateTitle="User Manual" />
        <Navbar />
        <Layout className="flex flex-col max-w-5xl">
          <UserTransaction />
        </Layout>
      </main>
    </BaseLayout>
  );
};

export default UserTransactionPage;
