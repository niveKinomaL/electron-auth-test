import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
import "./index.css";
import { useState } from "react";

function App() {
  const [menuSelected, setSelectedMenu] = useState("Dashboard");

  return (
    <>
      <div className="bg-[#FBFBFB] h-screen w-screen flex flex-row">
        <SideBar
          setSelectedMenu={setSelectedMenu}
          menuSelected={menuSelected}
        />
        <Main menuSelected={menuSelected} />
      </div>
    </>
  );
}

export default App;
