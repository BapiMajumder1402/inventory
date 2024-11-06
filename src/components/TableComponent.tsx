import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  TablePagination,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import filter from "/fi_filter.svg";
import search from "/Search.svg";
import Send from "/Send.svg";
import Calender from "/Calendar.svg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const dummyData = [
  {
    id: 1,
    name: "Product 1",
    category: "Category A",
    unitPrice: 20,
    stock: 100,
    discount: 10,
    totalValue: 180,
    image: "https://via.placeholder.com/40",
    status: "Active",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category B",
    unitPrice: 30,
    stock: 200,
    discount: 15,
    totalValue: 255,
    image: "https://via.placeholder.com/40",
    status: "Inactive",
  },
];

const TableComponent: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedProduct, setSelectedProduct] = React.useState<number | null>(
    null
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    productId: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedProduct(productId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white rounded-xl p-4 mt-6">
      <div className="flex justify-between items-center p-4">
        <h3 className="text-lg ">Inventory Items</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-md px-2 py-1">
            <img src={search} alt="Search icon" className="mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent border-none placeholder-gray-500"
            />
          </div>
          <button className="flex items-center px-3 py-1 rounded-md border border-black">
            <img src={Send} alt="Send icon" className="mr-2" />
            <span className="text-[#53545C]">Send</span>
          </button>
          <button className="flex items-center px-3 py-1 rounded-md border border-black">
            <img src={Calender} alt="Send icon" className="mr-2" />
            <span className="text-[#53545C]">Filter</span>
          </button>
          <button className="flex items-center px-3 py-1 rounded-md border border-black">
            <img src={filter} alt="Send icon" className="mr-2" />
            <span className="text-[#53545C]">Filter</span>
          </button>
          <button className="flex items-center px-3 py-1 rounded-md border border-black">
            <span className="text-[#53545C]">Bulk Action</span>
<ExpandMoreIcon className="text-black"/>
          </button>
        </div>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Product Image</TableCell>
              <TableCell>
                Product Name <FilterListIcon />
              </TableCell>
              <TableCell>
                Category <FilterListIcon />
              </TableCell>
              <TableCell>
                Unit Price <FilterListIcon />
              </TableCell>
              <TableCell>
                Stock <FilterListIcon />
              </TableCell>
              <TableCell>
                Discount <FilterListIcon />
              </TableCell>
              <TableCell>
                Total Value <FilterListIcon />
              </TableCell>
              <TableCell>
                Action <FilterListIcon />
              </TableCell>
              <TableCell>
                Status <FilterListIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow key={product.id}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "40px", height: "40px" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography>{product.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{product.category}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>${product.unitPrice}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{product.stock}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{product.discount}%</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>${product.totalValue}</Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={(event) => handleClick(event, product.id)}
                    >
                      <FilterListIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Typography>{product.status}</Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dummyData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TableComponent;
