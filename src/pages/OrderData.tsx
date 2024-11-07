import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import yellowBagIcon from "/yellow-bag.png";
import eye from "/eye.png";
import ChartIcon from "/chartIcon.png";
import product from "/product.jpg";
import TableComponent from "../components/TableComponent";

const OrderData = () => {
  return (
    <div className="page">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-0 py-6 ">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 ">
          <h4 className="text-center md:text-left">Polo - T Shirt</h4>
          <h4 className="text-left ">
            Date Added <span className="text-gray-400 ">12th September</span>
          </h4>
          <h4 className="text-left ">
            Product URL <span className="text-gray-400 ">myproduct.com</span>
            <ContentCopyRoundedIcon className="text-blue-500 text-sm ml-1" />
          </h4>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-0">
          <button className="w-full md:w-auto bg-black text-white hover:bg-blue-600 ">
            Edit Product <ExpandMoreIcon className="ml-2" />
          </button>
          <button className="w-full md:w-auto  bg-[#CC5F5F] text-white ">
            Unpublish Product
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 lg:gap-0 justify-between mx-0 ">
        <div className="w-full md:w-[40%] lg:w-[10%]">
          <div className="img-Card h-40 w-full flex items-center justify-center bg-white rounded-lg">
            <img
              src={product}
              alt=""
              className="max-h-[70%] max-w-[70%] rounded-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-[53%] lg:w-[35%]">
          <div className="h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex gap-1 items-center">
                <h4 className="text-sm text-gray-500">Last Order</h4>
                <p className="text-sm text-gray-900">12th September</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-400 text-sm">All Times</span>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col">
                <h6 className="text-sm text-slate-500 font-normal">Price</h6>
                <p className="text-lg font-semibold text-gray-600">25000.00</p>
              </div>
              <div className="flex-1 flex flex-col">
                <h6 className="text-sm text-slate-500 font-normal">Stock</h6>
                <p className="text-lg font-semibold text-gray-600">12</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[47%] lg:w-[25%]">
          <div className="h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <img src={ChartIcon} alt="" />
              <div className="flex items-center gap-1">
                <span className="text-gray-400 text-sm">All Times</span>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="text-base text-slate-500">Total Orders</h6>
              <p className="text-lg sm:text-2xl font-semibold text-gray-700">25,0000.00</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[47%] lg:w-[25%]">
          <div className="h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <img src={eye} alt="" />
              <div className="flex items-center gap-1">
                <span className="text-gray-400 text-sm">All Times</span>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col">
                <h6 className="text-base text-slate-500">Views</h6>
                <p className="text-lg sm:text-2xl font-semibold text-gray-700">2,521</p>
              </div>
              <div className="flex-1 flex flex-col">
                <h6 className="text-base text-slate-500">Favorite</h6>
                <p className="text-lg sm:text-2xl font-semibold text-gray-700">1,789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6">
        <div className="flex-1 h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <img src={yellowBagIcon} alt="" />
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-sm">All Times</span>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="flex gap-4 mt-3 lg:mt-0">
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">All Orders</h6>
              <p className="text-lg sm:text-2xl font-semibold text-gray-700">10</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Pending</h6>
              <p className="text-lg sm:text-2xl font-semibold text-gray-700">12</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Delivered</h6>
              <p className="text-lg sm:text-2xl font-semibold text-gray-700">11</p>
            </div>
          </div>
        </div>

        <div className="flex-1 h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <img src={yellowBagIcon} alt="" />
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-sm">All Times</span>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="flex gap-4 mt-3 lg:mt-0">
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Return</h6>
              <p className="text-lg sm:text-2xl font-semibold text-gray-700">0</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Exchange</h6>
              <p className="text-lg sm:text-2xl font-semibold text-gray-700">2</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Refund</h6>
              <p className="text-lg sm:text-2xl font-semibold text-gray-700">1</p>
            </div>
          </div>
        </div>
      </div>

      <TableComponent />
    </div>
  );
};

export default OrderData;
