import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="w-full">
      <div className=" float-right">
        <UserButton />
      </div>
    </div>
  );
};

export default Home;
