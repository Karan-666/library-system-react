import React from "react";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

// this will help us to create shared routing layout
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      {/* Outlet is placeholder for components like homepage or BrowseBooks */}
      <div className="mt-15">
        <Outlet />
      </div>
      {/* will add footer here later */}
    </div>
  );
}

export default App;
