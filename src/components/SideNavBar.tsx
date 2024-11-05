import { NavLink } from 'react-router-dom';
import Category from '/Category.png';
import Chat from '/Chat.png';
import earphone from '/earphone.png';
import Folder from '/Folder.png';
import gift from '/gift.png';
import Setting from '/Setting.png';
import logout from '/logout.png';
import logo from '/logo.jpg'
const SideNavBar = () => {
  return (
    <div className="flex flex-col h-screen w-24 text-white fixed p-5 bg-white">
      <nav className="flex-grow ">
        <ul className="flex flex-col space-y-0 p-0 m-0">
            <div>
                <img src={logo} alt="" className='mb-12 mt-2'/>
            </div>
          <li className="list-none">
            <NavLink
              to="/"
              className="flex items-center p-3 rounded-lg transition duration-200 hover:bg-blueBg  "
            >
              <img src={Category} alt="Category" className=" w-7 h-7" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/chat"
              className="flex items-center p-3 rounded-lg transition duration-200 hover:bg-blueBg  "
            >
              <img src={Chat} alt="Chat" className=" w-7 h-7" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/folder"
              className="flex items-center p-3 rounded-lg transition duration-200 bg-hover:blueBg  "
            >
              <img src={Folder} alt="Folder" className=" w-7 h-7" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/settings"
              className="flex items-center p-3 rounded-lg transition duration-200 hover:bg-blueBg  "
            >
              <img src={Setting} alt="Settings" className=" w-7 h-7" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto mb-4">
        <ul className="flex flex-col space-y-0 p-0 m-0">
          <li className="list-none">
            <NavLink
              to="/earphone"
              className="flex items-center p-3 rounded-lg transition duration-200 hover:bg-blueBg  "
            >
              <img src={earphone} alt="Earphone" className=" w-7 h-7" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/gift"
              className="flex items-center p-3 rounded-lg transition duration-200 hover:bg-blueBg  "
            >
              <img src={gift} alt="Gift" className=" w-7 h-7" />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/logout"
              className="flex items-center mt-16 p-3 rounded-lg transition duration-200 hover:bg-blueBg  "
            >
              <img src={logout} alt="Logout" className=" w-7 h-7" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavBar;
