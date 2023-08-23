import "./index.css";
function App() {
  return (
    <>
      <div className="bg-mainBg bg-center flex-col flex items-center justify-center bg-cover h-screen">
        <div className="bg-white opacity-70 justify-center rounded-2xl flex flex-col w-2/3 shadow-2xl h-2/3">
          <div className="flex mb-14 flex-col items-center">
            <img
              src="https://i.imgur.com/ZrSkE0V.png"
              className="w-2/4"
              alt=""
            />
            <span className="w-11/12 h-0.5 opacity-40 bg-black"></span>
          </div>
          <div className="flex flex-col items-center text-center">
            <form className="flex flex-col gap-3" action="">
              <h1 className="font-thin text-3xl">Auth System</h1>
              <input
                type="email"
                placeholder="E-mail"
                className="bg-black rounded-2xl pl-5 pr-5 outline-none text-white opacity-60 w-80 h-10"
              />
              <input
                type="password"
                placeholder="Pass"
                className="bg-black opacity-60 pl-5 pr-5 text-white outline-none rounded-2xl w-80 h-10"
              />
              <button className="font-bold hover:opacity-60 transition-opacity duration-150">
                Connect
              </button>
            </form>
          </div>
        </div>
        <p className="text-black font-bold font-mono text-sm mt-5">
          Dev f0.2 Kevin Lamoni
        </p>
      </div>
    </>
  );
}

export default App;
