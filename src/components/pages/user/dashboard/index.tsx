import Typography from "@/components/core/typography";
import UserMenu from "@/modules/user/dashboard/menu";

const UserDashboard = () => {
  return (
    <main>
      <Typography variant="h3" color="primary">
        My Dashboard
      </Typography>
      <section className="mt-5">
        <UserMenu />
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-2">
          {quickData?.map((item, index) => {
            return (
              <div
                className="mt-3 px-6 py-3 border border-primary w-full rounded-md"
                key={index}
              >
                <Typography variant="h4" color="primary">
                  {item?.title}
                </Typography>
                <Typography variant="h2">{item?.value}</Typography>
                <Typography variant="small" className="text-xs">
                  {item?.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
const quickData = [
  {
    title: "Total boats",
    value: 15,
    description: "Lorem ipsum dolor si amet",
  },
  {
    title: "Wallet Balance",
    value: 13342233,
    description: "Lorem ipsum dolor si amet",
  },
  {
    title: "Incoming Bills",
    value: 13,
    description: "Lorem ipsum dolor si amet",
  },
];
export default UserDashboard;
