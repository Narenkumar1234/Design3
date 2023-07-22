import { Slider } from "@mui/material";
export default function Rightpanel() {
  return (
    <div className="lg:py-14 pt-5 ">
      <div className="lg:w-9/12">
        <div className="lg:rounded-lg rounded-t-3xl bg-gray-50 lg:p-5 px-10 pt-5">
          <h1 className="text-lg font-bold"> Retirement Strategy </h1>
          <div className="mt-6 space-y-3">
            <div>
              <h2 className="text-sm"> Employee Contribution </h2>
            </div>
            <div class="flex  items-center  justify-center">
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                // eslint-disable-next-line
                className="custom-slider"
              />
            </div>
            <div className="">
              <h2 className="text-sm"> Retirement Age </h2>
            </div>
            <div class="flex  items-center  justify-center">
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                // eslint-disable-next-line
                className="custom-slider"
              />
            </div>
          </div>

          <hr className="my-5"></hr>

          <div className="space-y-5">
            <div className=" text-sm flex justify-between items-center">
              <h2>Employer Contribution</h2>
              <h2>8.4%</h2>
            </div>

            <div className="text-sm lg:pb-0 flex justify-between items-center">
              <h2 className="pb-10 lg:pb-0">Interest Rate</h2>
              <h2 className="pb-10 lg:pb-0">5%</h2>
            </div>
          </div>

          <div className=" hidden lg:block mt-5  ">
            <button className="w-full text-xs bg-theme text-white px-4 py-3 rounded-lg">
              Update
            </button>
          </div>

          <div className="hidden lg:block my-4 text-xs text-theme font-bold text-center">
            <h2> {"View Help Docs >"} </h2>
          </div>
        </div>
      </div>
      <div className="hidden lg:block px-4 py-1 border-l-2 mt-8 space-y-2 border-theme w-4/6">
        <p>
          Are you considering a <b>Housing Advance?</b>
        </p>
        <p className="text-xs font-bold text-gray-400">
          Limited Time Reduced Interest
        </p>
        <p className="text-sm text-theme font-bold mt-4">{"Learn More >"}</p>
      </div>

      <div className="lg:hidden absolute w-full z-50 ">
        <button className="w-full bg-theme text-white px-4 py-5 ">
          Update
        </button>
      </div>
    </div>
  );
}
