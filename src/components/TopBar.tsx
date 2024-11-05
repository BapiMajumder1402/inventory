import React, { useState, MouseEvent } from 'react';
import { Menu, MenuItem} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '/logo.jpg';

const TopNavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="ml-24 flex justify-between items-center p-4 ">
      <div>
        <h3 className="text-left text-2xl">Inventory</h3>
      </div>
      <div className="flex items-center space-x-4">
        <div onClick={handleClick} className="bg-lightYellow py-2 px-4 rounded-lg text-base">
        Nanny’s Shop <ExpandMoreIcon className='ml-3'/>
        </div>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default TopNavBar;