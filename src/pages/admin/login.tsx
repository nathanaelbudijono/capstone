import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import LoginAdmin from "@/components/pages/admin/login";

const AdminLoginPage = () => {
  return (
    <main>
      <Seo templateTitle="Admin Login" />
      <Layout className="h-screen flex justify-center items-center">
        <LoginAdmin />
      </Layout>
    </main>
  );
};

export default AdminLoginPage;
