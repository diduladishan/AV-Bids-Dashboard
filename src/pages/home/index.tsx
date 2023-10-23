import React from "react";
import HOME_1 from "../../assets/home_1.png";
import { Button, Input, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import AVATAR from "../../assets/11_dashboard/avatar.png";

import PLUS_ICON from "../../assets/11_dashboard/plus.png";

// ------------------------------------Table Contents--------------------------------------------------
const TABLE_HEAD = ["Name", "Role", "Email", ""];

const TABLE_ROWS = [
  {
    name: "Dixie Normus",
    Role: "Manager",
    email: "dixie@anitameetings.com",
  },
  {
    name: "Jane Smith",
    Role: "Developer",
    email: "dixie@anitameetings.com",
  },
  {
    name: "Jane Smith",
    Role: "Executive",
    email: "dixie@anitameetings.com",
  },
  {
    name: "Jane Smith",
    Role: "Developer",
    email: "dixie@anitameetings.com",
  },
  {
    name: "Jane Smith",
    Role: "Manager",
    email: "dixie@anitameetings.com",
  },
];
// ------------------------------------Table Contents--------------------------------------------------

function index() {
  return (
    <div className="container mx-auto">
      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
        <div>
          <div className="grid grid-cols-2 justify-items-center gap-8">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={AVATAR}
                  alt="aad"
                  className="object-scale-down w-[67px]"
                />
                <Button
                  variant="filled"
                  color="indigo"
                  size="sm"
                  className="rounded-md w-41 py-2 mt-4 px-4 bg-primary font-poppins"
                >
                  <span className="text-white">Upload New Photo</span>
                </Button>
              </div>
            </div>
            <div></div>
            <div>
              <div>
                <p className="text-[16px] mb-2">Full Name</p>
                <div className="w-72">
                  <Input
                    label="Username"
                    crossOrigin=""
                    className=" bg-[#f0edfb]"
                  />
                </div>
              </div>
            </div>

            <div>
              {" "}
              <div>
                <p className="text-[16px] mb-2">Email Address</p>
                <div className="w-72">
                  <Input
                    label="Username"
                    crossOrigin=""
                    className=" bg-[#f0edfb]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-[16px] mb-2">Company</p>
                <div className="w-72">
                  <Input
                    label="Username"
                    crossOrigin=""
                    className=" bg-[#f0edfb]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-[16px] mb-2">Phone Number</p>
                <div className="w-72">
                  <Input
                    label="Username"
                    crossOrigin=""
                    className=" bg-[#f0edfb]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                {" "}
                <p className="text-[16px] mb-2">Website</p>
                <div className="w-72">
                  <Input
                    label="Username"
                    crossOrigin=""
                    className=" bg-[#f0edfb]"
                  />
                </div>
              </div>
            </div>

            <div></div>
          </div>

          <div className="flex justify-end">
            <Button
              variant="filled"
              color="indigo"
              size="sm"
              className="rounded-md w-30 py-3 mt-4 px-6 bg-primary font-poppins rounded-full"
            >
              <span className="text-white">Submit</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-semibold">Members</h2>
          <Button
            variant="outlined"
            size="sm"
            className="hidden lg:inline-block rounded-btn "
          >
            <div className="flex items-center gap-2">
              <img src={PLUS_ICON} alt="aad" className="object-contain" />
              <span className="text-black normal-case">Add New Member</span>
            </div>
          </Button>
        </div>

        <div>
          <Card className="h-full w-full shadow-none rounded-xl ">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-[#e7daff] p-4"
                    >
                      <p className="font-medium leading-none text-black">
                        {head}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, Role, email }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Role}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
        <h2 className="text-[20px] font-semibold">Change Password</h2>

        <div className="grid grid-cols-1 gap-4">
          <div>01</div>

          <div>02</div>
          <div>03</div>
        </div>
      </section>

      <Link to="/11_dashbord">
        <div></div>
      </Link>
    </div>
  );
}

export default index;
