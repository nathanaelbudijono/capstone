import { Button } from "@/components/buttons/button";
import Typography from "@/components/core/typography";
import Link from "next/link";

const UserProfile = () => {
  return (
    <main className="h-screen max-sm:h-full">
      <section className="flex justify-between">
        <Typography variant="h3" color="primary">
          My Profile
        </Typography>
        <Button variant="default">
          <Link href="profile/update">Edit Profile</Link>
        </Button>
      </section>
      <section className="mt-5">
        <div className="w-1/4">
          <img
            src="/images/empty-user.png"
            alt="Empty User"
            className="object-cover"
          />
        </div>
      </section>
      <section className="border-t-2 mt-5 pt-5 border-primary">
        <div className="px-4 py-2 border rounded-md border-primary">
          <div>
            <Typography variant="h4" color="primary">
              Personal Information
            </Typography>
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 items-center overflow-auto">
            <Typography variant="small">First Name</Typography>
            <Typography variant="small">John</Typography>
            <Typography variant="small">Last Name</Typography>
            <Typography variant="small">Doe</Typography>
            <Typography variant="small">email</Typography>
            <Typography variant="small">nathanaelbudijono@gmail.com</Typography>
            <Typography variant="small">Date of Birth</Typography>
            <Typography variant="small">27 January 1999</Typography>
            <Typography variant="small">Phone Number</Typography>
            <Typography variant="small">085100873060</Typography>
            <Typography variant="small">City</Typography>
            <Typography variant="small">Jakarta</Typography>
            <Typography variant="small">Country</Typography>
            <Typography variant="small">Indonesia</Typography>
          </div>
        </div>
      </section>
    </main>
  );
};
export default UserProfile;
