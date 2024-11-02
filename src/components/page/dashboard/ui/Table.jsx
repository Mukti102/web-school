import React from "react";
import DataTable from "react-data-table-component";
import useFetch from "../../../../hooks/useFetch";
import AddButton from "./AddButton";
import ModalAction from "./ModalAction";
import parse from "html-react-parser";
import ViewBtn, { DeleteBtn, EditBtn } from "./Action";
import { limit, limitTitle } from "../../../../utils/method";

const customStyles = {
  rows: {
    style: {
      minWidth: "10px",
      minHeight: "50px", // override the row height
      border: "1px solid #1111",
    },
  },
  headCells: {
    style: {
      fontSize: ".8rem",
      background: "#f1f5f9",

      fontWeight: "600",
      border: "1.5px solid #1111",
      borderRight: "0px solid #1111",
      borderBottom: "0px solid #2222",
    },
  },
  cells: {
    style: {
      width: "0",
      fontSize: ".7rem",
      borderRight: "1.5px solid #2222",
    },
  },
};

//search component

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <div className="flex gap-5 h-10 w-56 mb-3 ">
    <input
      id="search"
      type="text"
      placeholder="Cari Berdasarkan Judul...."
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
      className="bg-white border shadow-primary border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    {/* <button
      type="buuton"
      onClick={onClear}
      className="bg-blue-600 py-1 px-4 rounded-sm text-white"
    >
      search
    </button> */}
  </div>
);

function Table({ name, title, limit }) {
  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: "Judul",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Content",
      selector: (row) => parse(`${limitTitle(row.description)}`),
      sortable: true,
    },
    {
      name: "Penulis",
      selector: (row) => row.author,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.created_at,
      sortable: true,
    },
    {
      name: "Thumbnail",
      cell: (row) => (
        <div className="w-full h-16 p-1">
          <img className="w-full h-full object-cover" src={row.thumbnail} />
        </div>
      ),
      maxWidth: "120px",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-1">
          <ViewBtn url={`${row.id}`} />
          <EditBtn url={`${row.id}/edit`} />
          <DeleteBtn url={`${name}/${row.id}`} />
        </div>
      ),
    },
  ];

  const { isLoading, data } = useFetch(name, limit);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data?.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
  );
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <>
      <DataTable
        progressPending={isLoading}
        customStyles={customStyles}
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        subHeaderAlign="right"
        title={<Title title={title} />}
        actions={<AddButton name={name} />}
        persistTableHead
        fixedHeader
        fixedHeaderScrollHeight="500px"
      />
    </>
  );
}

const Title = ({ title }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl  font-bold">{title}</h1>
    </div>
  );
};
export default Table;
