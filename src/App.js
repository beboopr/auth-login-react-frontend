import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Singup from "./components/Singup";
import Login from "./components/Login";
import "./App.css";

export default function App() {
  const [user, setUser] = useState();
  return (
    <Routes>
      {user ? (
        <Profile user={user} />
      ) : (
        <>
          <Route path="/singup" element={<Singup setUser={setUser} />} />
          <Route path="*" element={<Login setUser={setUser} />} />
        </>
      )}
    </Routes>
  );
}
