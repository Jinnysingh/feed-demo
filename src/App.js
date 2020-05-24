import React, { useState, useEffect } from "react";
import data from "./Data";
import Post from "./Container/Posts/index";
import "./styles.css";
import { myContext } from "./MyContext";

export default function App() {
  const [userData, setUserData] = useState(data);
  useEffect(() => {
    setTimeout(() => {
      setUserData(data);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <myContext.Provider value={userData}>
        <Post />
      </myContext.Provider>
    </div>
  );
}
