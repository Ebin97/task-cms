import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import AllCustomer from "./AllCustomer";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
    <>
      <div className="jumbotron">
        <h1>Welcome {user ? user.name : null}</h1>
        <div style={{ marginTop: '30px' }}>
        <AllCustomer></AllCustomer>
        </div>
      </div>
    </>
  );
};

export default Home;

