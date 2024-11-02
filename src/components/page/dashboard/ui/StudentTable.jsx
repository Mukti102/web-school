import React from "react";
import DataTable from "react-data-table-component";
import useFetch from "../../../../hooks/useFetch";
import parse from "html-react-parser";
import ViewBtn, { AcceptedBtn, DeleteBtn, EditBtn, RejectBtn } from "./Action";

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
      // color: "red",
      background: "#f1f5f9",
      fontWeight: "600",
      fontSize: ".9rem",
      border: "1px solid #1111",
      borderBottom: "none",
    },
  },
  cells: {
    style: {
      width: "0",
      fontSize: ".8rem",
      borderRight: "1px solid #1111",
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

function StudentTable({ name, title }) {
  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: "Nama",
      selector: (row) => row.fullname,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) =>
        row.gender == "male" ? <>Laki-Laki</> : <>Perempuan</>,
    },
    {
      name: "NISN",
      selector: (row) => row.NISN,
    },
    {
      name: "NIK",
      selector: (row) => row.NIS,
    },
    {
      name: "Nomor",
      selector: (row) => row.no_hp,
    },
    {
      name: "Status",
      selector: (row) => (
        <div
          className={` ${
            row.status == "belum di Proses"
              ? "bg-orange-100 text-orange-600"
              : row.status == "di terima"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          } px-2 capitalize py-0.5 font-medium text-xs rounded-xl`}
        >
          {row.status ? row.status : "pending"}
        </div>
      ),
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
      width: "130px",
    },
  ];

  const { isLoading, data } = useFetch(name);
  console.log(data);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.fullname &&
      item.fullname.toLowerCase().includes(filterText.toLowerCase())
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
export default StudentTable;
