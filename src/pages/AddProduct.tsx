import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Calender from "/Calendar.svg";
import clock from "/fi_clock.png";
import uploadIcon from '/upload.svg'
import uploadSection from '/upload.png'
import deleteIcon from '/delete.svg'
import product  from '/product.jpg'
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
      <div className="flex justify-between items-center mx-0 py-6">
        <h4 className="text-left heading">New Inventory Item</h4>
        <div className="flex items-center gap-6">
          <button className="bg-black hover:bg-blue-600">
            Save as Draft{" "}
            <span>
              <ExpandMoreIcon />
            </span>
          </button>
          <button className="bg-blueBg hover:bg-blue-600">
            Save & Publish
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="bg-white p-6 min-h-[75vh] rounded-xl w-full lg:w-[67%] mb-4 lg:mb-0">
          <div className="flex justify-between">
            <div className="w-[45%] flex flex-col gap-7">
              <div>
                <p className="text-gray-600 text-sm">Product Name</p>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="mt-1 w-[100%]"
                />
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  placeholder="Selling Price"
                  className="w-[48%]"
                />
                <input
                  type="number"
                  placeholder="Cost Price"
                  className="w-[48%]"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Quantity In Stock"
                  className="w-[100%]"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Order Type"
                  className="w-[100%]"
                />
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold text-gray-500">
                  Discount
                </h5>
                <p className="flex items-center gap-2">
                  Add Discount
                  <IOSSwitch defaultChecked />
                </p>
              </div>
              <div className="flex items-center justify-between">
                <input type="text" placeholder="Type" className="w-[48%]" />
                <input type="text" placeholder="Value" className="w-[48%]" />
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold text-gray-500">
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
            <div className="w-[45%] flex flex-col gap-7">
              <div>
                <textarea
                  placeholder="Short Description "
                  className="h-40 w-[100%]"
                ></textarea>
              </div>
              <div>
                <p className="text-gray-600 text-base">Product Long Description</p>
                <textarea
                  placeholder="Long Description "
                  className="h-40 w-[100%] mt-1"
                ></textarea>
                <p className="text-gray-400 text-base">Add a Long Description for Your Product</p>
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold text-gray-500">
                  Return Policy
                </h5>
                <p className="flex items-center gap-2 text-gray-400 text-base">
                  Add Return Policy
                  <IOSSwitch defaultChecked />
                </p>
              </div>
              <div className="flex justify-between items-center">
              <button className="inputButton flex items-center  w-[48%]">
                <img src={Calender} alt="Calendar Icon" className="h-5" />
                <input
                  type="date"
                  className="focus:outline-none focus:border-none cursor-pointer bg-transparent"
                  style={{ appearance: "none", WebkitAppearance: "none" }}
                />
              </button>
              <button className="inputButton flex items-center  w-[48%]">
                <img src={clock} alt="Calendar Icon" className="h-5" />
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
        <div className="bg-white p-6  min-h-[75vh] rounded-xl w-full lg:w-[32%] mb-4 lg:mb-0 images-section">
          <h4 className="text-lg text-gray-600 font-semibold ">Additional Images</h4>
          <div className="img-Card h-80 w-[100%] flex items-center justify-center mt-3">
            <img src={product} alt="" className="max-h[100%] max-w-[100%]" />
            <div className="buttons">
              <button className="p-0"><img src={uploadIcon} alt="" /></button>
              <button className="p-0"><img src={deleteIcon} alt="" /></button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
          <div className="img-Card h-[15rem] w-[46%] flex items-center justify-center mt-3">
            <img src={product} alt="" className="max-h[100%] max-w-[100%]" />
            <div className="buttons">
              <button className="p-0"><img src={uploadIcon} alt="" /></button>
              <button className="p-0"><img src={deleteIcon} alt="" /></button>
            </div>
          </div>
          <div className="bg-lightBlueBg h-[15rem] w-[46%] flex items-center justify-center mt-3 img-Card">
            <img src={uploadSection} alt="" className="max-h[100%] max-w-[100%]" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
