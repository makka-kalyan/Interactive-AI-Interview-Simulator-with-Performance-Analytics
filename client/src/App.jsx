import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import axios from "axios";
import { useEffect } from "react";
import { setUserData } from "./redux/userSlice.js";
import { useDispatch } from "react-redux";

export const ServerUrl = "http://localhost:8000";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {
          withCredentials: true,
        });
        console.log("SUCCESS:", result.data);
        dispatch(setUserData(result.data));
      } catch (error) {
        console.log("ERROR:", error.response?.data || error.message);
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
