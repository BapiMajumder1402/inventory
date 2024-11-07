import { NavLink } from 'react-router-dom';
import Category from '/Category.png';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import earphone from '/earphone.png';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import gift from '/gift.png';
import logout from '/logout.png';
import logo from '/logo.jpg';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import GridViewIcon from '@mui/icons-material/GridView';

const SideNavBar = () => {
  return (
    <div className="flex flex-col h-screen w-16 text-white fixed p-2 md:p-5 bg-white md:w-24 lg:w-24 lg:text-base">
      <nav className="flex-grow">
        <ul className="flex flex-col gap-3 space-y-0 p-0 m-0">
          <div>
            <img src={logo} alt="Logo" className="mb-12 mt-2 hidden md:block" />
          </div>
          <li className="list-none">
            <NavLink
              to="/"
              className="flex items-center p-3 justify-center rounded-xl transition duration-200 hover:bg-blueBg">
              <GridViewIcon className="text-lg md:text-sm" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/add-product"
              className="flex items-center p-3 justify-center rounded-xl transition duration-200 hover:bg-blueBg">
              <ChatBubbleOutlineRoundedIcon className="text-lg md:text-sm" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/product-data"
              className="flex items-center justify-center p-3 rounded-xl transition duration-200 hover:bg-blueBg hover:text-white">
              <FolderOpenRoundedIcon className="text-lg md:text-sm" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/settings"
              className="flex items-center justify-center p-3 rounded-xl transition duration-200 hover:bg-blueBg">
              <SettingsRoundedIcon className="text-lg md:text-sm" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto mb-4">
        <ul className="flex flex-col space-y-0 p-0 m-0">
          <li className="list-none">
            <NavLink
              to="/earphone"
              className="flex items-center p-3 bg-[#5E63661A] rounded-xl transition duration-200 hover:bg-blueBg">
              <img src={earphone} alt="Earphone" className="w-5 h-5 md:w-6 md:h-6" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/gift"
              className="flex items-center p-3 rounded-xl bg-[#FFCC9133] transition duration-200 hover:bg-blueBg mt-3">
              <img src={gift} alt="Gift" className="w-5 h-5 md:w-6 md:h-6" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/logout"
              className="flex items-center mt-16 p-3 rounded-xl transition duration-200 hover:bg-blueBg">
              <img src={logout} alt="Logout" className="w-5 h-5 md:w-6 md:h-6" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
