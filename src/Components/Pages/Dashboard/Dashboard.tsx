import { IoIosNotifications } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center items-center px-10">
      <div className="w-full h-fit gap-2  flex items-center justify-around">
        <div className="w-11/12 h-8 border-2 rounded-3xl flex items-center justify-center mr-10">
          <input
            type="text"
            placeholder="Busque pelo nome do cliente..."
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
      <div className="w-full h-72 gap-2 flex flex-col overflow-y-auto bg-white shadow-xl p-5 rounded-xl">
        <div className="w-full py-2 flex items-center justify-between px-4 h-10 bg-gradient-to-r from-[#7f78d3] to-[#5E54C9] rounded-xl">
          <div className="w-fit flex items-center gap-2">
            <div
              className="w-8 h-8 border-white border-2 bg-black rounded-full"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/originals/4e/45/88/4e458893b1fdc033508016e09fa5553c.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-44 flex items-center justify-start">
              <p className="font-bold text-[10px] text-white">
                KEVIN LAMONI BATISTA FERREIRA
              </p>
            </div>
          </div>
          <div className="w-32 flex items-center justify-start">
            <p className="font-bold text-[10px] text-white">PLANO INDIVIDUAL</p>
          </div>
          <div className="w-16 flex items-center justify-start ">
            <p className="font-bold text-[10px] text-white">21 ANOS</p>
          </div>
          <div className="w-14 py-0.5 rounded-xl flex items-center justify-center bg-white">
            <p className="font-bold text-[10px] text-green-600">ATIVO</p>
          </div>
        </div>
        <div className="w-full py-2 flex items-center justify-between px-4 h-10 bg-gradient-to-r from-[#7f78d3] to-[#5E54C9] rounded-xl">
          <div className="w-fit flex items-center gap-2">
            <div
              className="w-8 h-8 border-white border-2 bg-black rounded-full"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/originals/4e/45/88/4e458893b1fdc033508016e09fa5553c.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-44 flex items-center justify-start ">
              <p className="font-bold text-[10px] text-white">
                JULIA ANHANGUERA GUERELLA
              </p>
            </div>
          </div>
          <div className="w-32 flex items-center justify-start">
            <p className="font-bold text-[10px] text-white">PLANO FAMÍLIA</p>
          </div>
          <div className="w-16 flex items-center justify-start ">
            <p className="font-bold text-[10px] text-white">17 ANOS</p>
          </div>
          <div className="w-14 py-0.5 rounded-xl flex items-center justify-center bg-white">
            <p className="font-bold text-[10px] text-red-600">INATIVA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
