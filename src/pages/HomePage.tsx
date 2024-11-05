import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import peopleIcon from "/people.svg";
import folderIcon from "/folder.svg";
import TableComponent from '../components/TableComponent'
const HeadingSection = () => {
  return (
    <div className="page">
      <div className="flex justify-between items-center mx-0 py-3">
        <h4 className="text-left heading">Inventory Summery</h4>
        <button className="bg-blueBg hover:bg-blue-600">
          <AddIcon /> Add New Product
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 h-40 bg-blueBg p-4 rounded-xl">
          <div>
            <img src={folderIcon} alt="" />
          </div>
          <div className="flex mt-9">
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-white">All Products</h6>
              <p className="font-semibold text-2xl text-white">350</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-white">Active</h6>
              <p className="text-2xl font-semibold text-white">350</p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-40 bg-white p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <img src={peopleIcon} alt="" />
            </div>
            <div>
                <span className="text-gray-400">This Week </span><ExpandMoreIcon />
            </div>
          </div>
          <div className="flex mt-9">
          <div className="flex-1 flex flex-col">
              <h6 className="text-base text-[#CC5F5F]">Low Stock Alert</h6>
              <p className="text-2xl font-semibold text-black">350</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">All Products</h6>
              <p className="font-semibold text-2xl text-black">350</p>
            </div>
            <div className="flex-1 flex flex-col">
              <h6 className="text-base text-slate-500">All Products</h6>
              <p className="font-semibold text-2xl text-black">350</p>
            </div>
            
          </div>
        </div>
      </div>
      <TableComponent/>
    </div>
  );
};

export default HeadingSection;
