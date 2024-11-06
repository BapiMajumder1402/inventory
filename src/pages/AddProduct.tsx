import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Calender from "/Calendar.svg";
import clock from "/fi_clock.png";
import uploadIcon from "/upload.svg";
import uploadSection from "/upload.png";
import deleteIcon from "/delete.svg";
import product from "/product.jpg";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#5570F1",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const AddProduct: React.FC = () => {
  return (
    <div className="page newProductPage">
      <div className="flex flex-col md:flex-row justify-between items-center mx-0 py-6">
        <h4 className="text-left heading mb-4 md:mb-0">New Inventory Item</h4>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <button className="w-full md:w-auto  bg-black text-white hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-blue-700 ">
            Save as Draft{" "}
            <span className="ml-1">
              <ExpandMoreIcon />
            </span>
          </button>
          <button className="w-full md:w-auto  bg-blueBg text-white hover:bg-blue-600 dark:bg-blue-700 ">
            Save & Publish
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="bg-white p-6 min-h-[75vh] rounded-xl w-full lg:w-[67%] mb-4 lg:mb-0 dark:bg-gray-800">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-[45%] flex flex-col gap-7">
              <div>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  Product Name
                </p>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="mt-1 w-full"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <input
                  type="number"
                  placeholder="Selling Price"
                  className="w-full lg:w-[48%]"
                />
                <input
                  type="number"
                  placeholder="Cost Price"
                  className="w-full lg:w-[48%]"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Quantity In Stock"
                  className="w-full"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Order Type"
                  className="w-full"
                />
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold text-gray-500 dark:text-gray-300">
                  Discount
                </h5>
                <p className="flex items-center gap-2">
                  Add Discount
                  <IOSSwitch defaultChecked />
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="Type"
                  className="w-full lg:w-[48%]"
                />
                <input
                  type="text"
                  placeholder="Value"
                  className="w-full lg:w-[48%]"
                />
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold text-gray-500 dark:text-gray-300">
                  Expiry Date
                </h5>
                <p className="flex items-center gap-2">
                  Expiry Date
                  <IOSSwitch defaultChecked />
                </p>
              </div>
              <button className="inputButton flex items-center">
                <img src={Calender} alt="Calendar Icon" className="h-5" />
                <input
                  type="date"
                  className="focus:outline-none focus:border-none cursor-pointer"
                  style={{ appearance: "none", WebkitAppearance: "none" }}
                />
              </button>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[45%] flex flex-col gap-7 mt-6 lg:mt-0">
              <textarea
                placeholder="Short Description"
                className="h-40 w-full"
              ></textarea>
              <div>
                <p className="text-gray-600 text-base dark:text-gray-400">
                  Product Long Description
                </p>
                <textarea
                  placeholder="Long Description"
                  className="h-40 w-full mt-1"
                ></textarea>
                <p className="text-gray-400 text-base">
                  Add a Long Description for Your Product
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold text-gray-500 dark:text-gray-300">
                  Return Policy
                </h5>
                <p className="flex items-center gap-2 text-gray-400 text-base">
                  Add Return Policy
                  <IOSSwitch defaultChecked />
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <button className="inputButton flex items-center w-full lg:w-[48%]">
                  <img src={Calender} alt="Calendar Icon" className="h-5" />
                  <input
                    type="date"
                    className="focus:outline-none focus:border-none cursor-pointer bg-transparent"
                    style={{ appearance: "none", WebkitAppearance: "none" }}
                  />
                </button>
                <button className="inputButton flex items-center w-full lg:w-[48%]">
                  <img src={clock} alt="Clock Icon" className="h-5" />
                  <input
                    type="time"
                    className="focus:outline-none focus:border-none cursor-pointer bg-transparent"
                    style={{ appearance: "none", WebkitAppearance: "none" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 min-h-[75vh] rounded-xl w-full lg:w-[32%] mb-4 lg:mb-0 images-section dark:bg-gray-800">
          <h4 className="text-lg text-gray-600 font-semibold dark:text-gray-300">
            Additional Images
          </h4>
          <div className="img-Card h-80 w-full flex items-center justify-center mt-3">
            <img
              src={product}
              alt="Product"
              className="max-h-full max-w-full"
            />
            <div className="buttons">
              <button className="p-0">
                <img src={uploadIcon} alt="Upload Icon" />
              </button>
              <button className="p-0">
                <img src={deleteIcon} alt="Delete Icon" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="img-Card h-40 md:h-[15rem] w-[46%] flex items-center justify-center mt-3">
              <img src={product} alt="" className="max-h[100%] max-w-[100%]" />
              <div className="buttons">
                <button className="p-0">
                  <img src={uploadIcon} alt="" />
                </button>
                <button className="p-0">
                  <img src={deleteIcon} alt="" />
                </button>
              </div>
            </div>
            <div className="bg-lightBlueBg h-40 md:h-[15rem]  w-[46%] flex items-center justify-center mt-3 img-Card">
              <img
                src={uploadSection}
                alt=""
                className="max-h[100%] max-w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
