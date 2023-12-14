import Typography from "@/components/core/typography";

const UserTransaction = () => {
  return (
    <main className="h-screen">
      <Typography variant="h3" color="primary">
        Incoming Transaction
      </Typography>
      <Typography variant="small" className="mt-2">
        Incoming bills from boat company's.
      </Typography>
    </main>
  );
};

export default UserTransaction;
