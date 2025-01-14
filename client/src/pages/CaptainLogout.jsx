import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainLogout = async () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/captains/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 200) {
      localStorage.removeItem("token");
      navigate("/captain-login");
    }
  } catch (error) {
    console.log(error.message);
  }

  return <div>CaptainLogout</div>;
};

export default CaptainLogout;
