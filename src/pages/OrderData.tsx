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
      <div className="flex justify-between items-center mx-0 py-6">
        <div className="flex items-center gap-6">
          <h4 className="text-left heading">Polo - T Shirt</h4>
          <h4 className="text-left heading">
            Dated Added{" "}
            <span className=" text-gray-400 font-normal">12th September</span>
          </h4>
          <h4 className="text-left heading">
            Product URL{" "}
            <span className=" text-gray-400 font-normal">
              myproduct.com/product{" "}
            </span>
            <ContentCopyRoundedIcon className="text-blue-500 text-sm" />
          </h4>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-black hover:bg-blue-600">
            Edit Product{" "}
            <span>
              <ExpandMoreIcon />
            </span>
          </button>
          <button className="bg-[#CC5F5F]">Unpublish Product</button>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="w-[10%]">
          <div className="img-Card h-40 w-[100%] flex items-center justify-center">
            <img
              src={product}
              alt=""
              className="max-h[70%] max-w-[70%] rounded-lg"
            />
          </div>
        </div>
        <div className="w-[35%]">
          <div className="flex-1 h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex gap-1 items-center">
                <h4 className="text-sm text-gray-500">Last Order</h4>
                <p className="text-sm text-gray-900">12th September</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm ">All Times</span>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className="flex">
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
        <div className="w-[25%]">
          <div className="flex-1 h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <img src={ChartIcon} alt="" />
              </div>
              <div>
                <span className="text-gray-400 text-sm ">All Times</span>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 flex flex-col">
                <h6 className="text-base text-slate-500">Total Orders</h6>
                <p className="text-2xl font-semibold text-gray-700">
                  25,0000.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="flex-1 h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <img src={eye} alt="" />
              </div>
              <div>
                <span className="text-gray-400 text-sm ">All Times</span>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 flex flex-col">
                <h6 className="text-base text-slate-500">Views</h6>
                <p className="text-2xl font-semibold text-gray-700">2,521</p>
              </div>
              <div className="flex-1 flex flex-col">
                <h6 className="text-base text-slate-500">Favorite</h6>
                <p className="text-2xl font-semibold text-gray-700">1,789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <div className="flex-1 h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <img src={yellowBagIcon} alt="" />
            </div>
            <div>
              <span className="text-gray-400 text-sm ">All Times</span>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">All Orders</h6>
              <p className="text-2xl font-semibold text-gray-700">10</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Pending</h6>
              <p className="text-2xl font-semibold text-gray-700">12</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Delivered</h6>
              <p className="text-2xl font-semibold text-gray-700">11</p>
            </div>
          </div>
        </div>

        <div className="flex-1 h-40 bg-white p-4 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <img src={yellowBagIcon} alt="" />
            </div>
            <div>
              <span className="text-gray-400 text-sm ">All Times</span>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Return</h6>
              <p className="text-2xl font-semibold text-gray-700">0</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Exchange</h6>
              <p className="font-semibold text-2xl text-gray-700">2</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">Refund</h6>
              <p className="font-semibold text-2xl text-gray-700">1</p>
            </div>
          </div>
        </div>
      </div>
      <TableComponent />
    </div>
  );
};

export default OrderData;
