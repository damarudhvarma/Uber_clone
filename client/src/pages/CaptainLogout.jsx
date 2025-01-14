import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("captain-token");

  useEffect(() => {
    const logout = async () => {
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
          localStorage.removeItem("captain-token");
          navigate("/captain-login");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    logout(); // Call the asynchronous logout function inside useEffect
  }, [navigate, token]); // Add dependencies to avoid stale references

  return <div>Logging out...</div>; // Display a message while logging out
};

export default CaptainLogout;
