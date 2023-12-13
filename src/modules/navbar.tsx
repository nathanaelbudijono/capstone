import Typography from "@/components/core/typography";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/popover";
import { clsx } from "clsx";

import { FaCircleUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { BsActivity } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { RiShutDownLine } from "react-icons/ri";
import { Button } from "@/components/buttons/button";

export default function Navbar() {
  return (
    <main
      className={clsx("px-16 max-md:px-6 sticky top-0 z-10 py-2 bg-primary")}
    >
      <section>
        <div className="flex justify-end items-center py-4">
          <div className="flex gap-3 items-center">
            <Popover>
              <PopoverTrigger>
                <FaCircleUser className="text-2xl text-typography-100" />
              </PopoverTrigger>
              <PopoverContent className="bg-secondary-100 w-full">
                <section className="border-b pb-2 border-primary">
                  <Typography variant="p" color="primary" className="pl-4 mb-1">
                    John Doe
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-xs pl-4"
                    color="muted"
                  >
                    View my profile
                  </Typography>
                </section>
                <section className="mt-2">
                  {links?.map(({ icon: Icon, name }) => {
                    return (
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 mb-1 w-full justify-start"
                      >
                        <Icon />
                        <Typography variant="small">{name}</Typography>
                      </Button>
                    );
                  })}
                  <Button
                    variant="ghost"
                    className="flex gap-2 items-center w-full justify-start"
                  >
                    <RiShutDownLine />
                    <Typography variant="small">Logout</Typography>
                  </Button>
                </section>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>
    </main>
  );
}

const links = [
  {
    icon: CiUser,
    name: "Edit Profile",
  },
  {
    icon: BsActivity,
    name: "Activity Log",
  },
  {
    icon: CiSettings,
    name: "Account Settings",
  },
];
