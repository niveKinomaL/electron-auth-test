import Dashboard from "./Pages/Dashboard/Dashboard";
const Main = ({ menuSelected }) => {
  return (
    <div className="w-full h-full">
      {menuSelected == "Dashboard" ? <Dashboard /> : "Nothing"}
    </div>
  );
};

export default Main;
