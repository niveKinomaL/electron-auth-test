import Dashboard from "./Pages/Dashboard/Dashboard";
const Main = ({ menuSelected }) => {
  return <div>{menuSelected == "Dashboard" ? <Dashboard /> : "Nothing"}</div>;
};

export default Main;
