import Chart from "./Chart";
import ChartMobile from "./ChartMobile";
import Progress from "./progress";
export default function MainPanel() {
  const ages = [18, 50, 80]; // Creates an array from 1 to 100
  const gender = ["Male", "Female"];
  const salary = ["K 10 - K20", "K 20 - K50"];
  var arr = ["Employer: ", "Employee: ", "Total Interest: "];
  return (
    <div className="lg:p-14 px-10 py-0 lg:ml-0 mx-2 lg:mt-4 bg-white">
      <div className="space-y-8">
        {/* Heading Section */}
        <div className="">
          <h1 className="text-xs text-theme font-semibold">
            Retirement Income
          </h1>
          <h1 className="font-bold lg:text-lg text-xl"> Starting Year 2056</h1>
        </div>
        {/* Amount Section */}
        <div className="grid lg:grid-cols-6 grid-cols-4 gap-5">
          <div className="lg:col-span-2 col-span-4">
            <h2 className="font-extrabold  lg:text-xl text-2xl">$300,000</h2>
            <h2 className="lg:text-xs text-xs text-gray-500 font-semibold mb-2">
              My Goal
            </h2>
            <hr className=" border-theme" />
          </div>

          <div className="col-span-2">
            <h2 className="font-extrabold lg:text-xl text-2xl">59%</h2>
            <h2 className="lg:text-xs text-xs text-gray-500 font-semibold mb-2">
              Goal Achieved
            </h2>
            <hr className="border-theme" />
          </div>

          <div className="col-span-2">
            <h2 className="font-extrabold lg:text-xl text-2xl">$300</h2>
            <h2 className="lg:text-xs text-xs  text-gray-500 font-semibold mb-2">
              Est. Monthly Income
            </h2>
            <hr className="border-theme" />
          </div>
        </div>
        {/* Graph section */}
        <div className="lg:mt-0 ">
          <h1 className="font-extrabold lg:mt-0 mt-16">
            {" "}
            Contributions Overtime{" "}
          </h1>
          <div className="flex justify-between lg:space-x-6 space-x-3">
            {arr.map((data, index) => (
              <div className="col-span-1">
                <div
                  key={index}
                  className="flex lg:flex-row flex-col lg:space-y-0 space-y-1 lg:items-center mt-5"
                >
                  <div
                    className={
                      "w-3 h-2  rounded-full bg-theme bg-blue-" + (index + 5) * 100
                    }
                  ></div>
                  <div className="lg:text-sm text-xs font-semibold text-gray-500 lg:ml-1">
                    <h2>{data}</h2>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-black inline">
                      <span className="lg:inline-block hidden mx-1">K</span>
                      <span className="lg:hidden">$</span>73,500
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 hidden lg:block">
            <Chart />
          </div>
          <div className="mt-5 lg:hidden">
            <ChartMobile />
          </div>
        </div>
        {/* Compare myself */}
        <div className="">
          <h1 className=" font-bold">How do I compare to my peers?</h1>
          <h2 className="text-xs text-gray-400 font-semibold">
            These numbers represent current goal achievement
          </h2>
          <div className="lg:flex ">
            <div className="lg:mt-10 mt-2">
              <div className="text-sm flex items-center">
                <h2 className="font-bold pr-2">Age: </h2>
                <select className="font-semibold bg-white border border-white text-gray-700 py-1  rounded ">
                  {ages.map((age) => (
                    <option key={age} value={age}>
                      Under {age}
                    </option>
                  ))}
                </select>
              </div>
              <hr className="mt-2"></hr>

              <div className="text-sm mt-3 flex items-center mr-10">
                <h2 className="font-bold  ">Salary: </h2>
                <select className="font-semibold bg-white border border-white text-gray-700 py-1  rounded ">
                  {salary.map((salary, index) => (
                    <option key={index} value={salary}>
                      {salary}
                    </option>
                  ))}
                </select>
              </div>
              <hr className="mt-2"></hr>

              <div className="text-sm flex mt-3 items-center">
                <h2 className="font-bold pr-2 ">Gender: </h2>
                <select className="font-semibold bg-white border border-white text-gray-700 py-1  rounded ">
                  {gender.map((gender, index) => (
                    <option key={index} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
              <hr className="lg:hidden mt-2"></hr>
            </div>
            {/* Progress Bars */}
            <div className="flex lg:p-14 lg:space-x-10 justify-between  lg:w-full  lg:mt-0 mt-5">
              <div className="flex flex-col items-center space-y-2">
                <Progress percentage={78} />
                <h2 className="lg:text-sm text-xs">Average</h2>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Progress percentage={90} />
                <h2 className="lg:text-sm text-xs">Top</h2>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Progress percentage={59} />
                <h2 className="lg:text-sm text-xs">Me</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
