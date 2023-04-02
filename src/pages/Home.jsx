import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import Header from "../components/layouts/Header"
import Alert from "../components/layouts/Alert"

function Home() {
  return (
    <div className="py-6">
      <Header />
      <Alert />
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
