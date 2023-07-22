import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function FirstPanel() {
  var arr = ["2022-08-07", "2022-08-21", "2020-07-16"];
  return (
    <div className="lg:p-14 p-10 lg:bg-gray-50 bg-white ">
      <div className="space-y-10">
        {/* Avatar and name  */}
        <div className="flex items-center space-x-5">
          <div className="rounded-full bg-green-400 w-20 h-20">
            <img
              className="w-20 h-20 rounded-full"
              alt=""
              src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1689926769~exp=1689927369~hmac=9930ef186729bccdd060f24fe4e7cced0c43c7c44297ba5f3a1d3bfd7b0c0557"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Hi Mike,</h1>
            <h2 className="text-xs text-gray-500 font-semibold">
              welcome back.
            </h2>
          </div>
        </div>
        {/* Today Area */}
        <div className="lg:pl-4 bg-gray-50 lg:p-0 p-7 lg:rounded-none rounded-3xl">
          <h1 className="text-sm font-semibold lg:mb-4 mb-1">Today</h1>
          <div className="space-y-4">
            <div>
              <h2 className="lg:text-2xl text-3xl lg:font-extrabold font-extrabold">
                $19,892
              </h2>
              <h2 className="text-xs text-gray-400 font-semibold">
                Account Balance
              </h2>
            </div>
            <div className="lg:space-y-4 lg:flex-col flex space-x-10 lg:space-x-0 flex-row">
              <div>
                <h2 className="text-lg  font-extrabold ">$4,000</h2>
                <h2 className="text-xs text-gray-400 font-semibold">
                  Year-to-Date
                  <span className="lg:inline-block hidden">Contributions</span>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-extrabold">$1,892</h2>
                <h2 className="text-xs text-gray-400 font-semibold">
                  Total Intereset
                </h2>
              </div>
            </div>
            <button className="bg-theme justify-center w-full lg:w-max px-4 flex items-center rounded-lg">
              <h2 className="text-xs p-2 py-3 text-white">
                I want to<span className="lg:hidden">...</span>
              </h2>
              <span className="text-xs lg:block hidden text-white">
                <FontAwesomeIcon size="xs" rotation={90} icon={faPlay} />
              </span>
            </button>
          </div>
        </div>
        {/* Recent Transcaction  */}
        <div className="lg:pl-4 bg-gray-50 lg:p-0 p-7 lg:rounded-none rounded-3xl">
          <h1 className="text-sm font-semibold mb-4">Recent Transactions</h1>
          <div className="space-y-5">
            {arr.map((data, index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-xs text-gray-400 font-semibold">{data}</h2>
                <h2 className="text-xs font-bold">
                  Withdrawal Transfer to Bank-XXX11
                </h2>
                <hr className="text-gray-300"></hr>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
