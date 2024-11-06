import { Link } from 'react-router-dom';
import home from '/Home.png';

const BreadCrumbs = () => {
  return (
    <div className="flex ml-[4.5rem] md:ml-24 items-center border-t border-light-blue-200 py-2 gap-2 px-4 md:px-6 bg-white">
      <img src={home} alt="Home" className="w-5 h-5" />
      <span>/</span>
      <Link to='/' className="text-gray-600 hover:text-gray-800">
        Inventory
      </Link>
    </div>
  );
}

export default BreadCrumbs;
