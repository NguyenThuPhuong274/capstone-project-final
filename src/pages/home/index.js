import React from "react";
import Dashboard from "../admin/dashboard";
import UserHomePage from "../user/home";
import PublicHomePage from "../public/home";


const HomePage = () => {
  const [role, setRole] = React.useState("admin");

  return (
    <>
      {role != null ? role == "admin" ? <Dashboard /> : <UserHomePage /> : <PublicHomePage />}
    </>
  );
}

export default HomePage;
