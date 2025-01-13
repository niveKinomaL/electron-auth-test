import { IoIosNotifications } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-full px-10">
      <div className="w-full h-14 gap-2  flex items-center justify-around">
        <div className="w-11/12 h-8 border-2 rounded-3xl flex items-center justify-center mr-10">
          <input
            type="text"
            placeholder="Search the client name..."
            className="bg-transparent w-full px-4 outline-none  text-xs font-bold opacity-75"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center p-2 rounded-full border-2">
            <IoIosNotifications />
          </div>
          <div
            className="w-8 h-8 bg-black rounded-full"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/4e/45/88/4e458893b1fdc033508016e09fa5553c.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className="w-full gap-5 h-40 flex items-center justify-center flex-row">
        <div className="w-full h-full shadow-xl rounded-xl bg-gradient-to-r from-[#7f78d3] to-[#5E54C9]"></div>
        <div className="w-72 h-full shadow-xl rounded-xl bg-white"></div>
      </div>
    </div>
  );
};

export default Dashboard;
