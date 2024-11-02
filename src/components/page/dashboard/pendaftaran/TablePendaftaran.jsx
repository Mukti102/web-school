import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import useFetch from "../../../../hooks/useFetch";
import AddButton from "../ui/AddButton";
import { useNavigate, useParams } from "react-router-dom";
import SmallBtn from "../ui/SmallBtn";
import DropUp from "../ui/DropUp";
import AppStore from "../../../../store/AppStore";
import { Button } from "flowbite-react";
import { BsFileExcel } from "react-icons/bs";
import { FaFileExport } from "react-icons/fa6";
// import ViewBtn, { AcceptedBtn, DeleteBtn, EditBtn, RejectBtn } from "./Action";

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
  <div className="flex h-10 w-full mb-3 ">
    <input
      id="search"
      type="text"
      placeholder="Cari Berdasarkan Judul...."
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
      className="bg-white w-60 border shadow-primary border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
);

function TablePendaftaran() {
  const { isAdmin } = AppStore((state) => state);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/dashboard");
    }
  }, []);

  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  const Export = ({ onExport }) => (
    <Button
      color="green"
      size="sm"
      type=""
      className="flex items-center rounded-md py-0.5"
      onClick={(e) => onExport(e.target.value)}
    >
      <span className="flex items-center gap-2 text-sm">
        Export
        <FaFileExport />
      </span>
    </Button>
  );

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
          className={`${
            row.status == null || row.status == "belum di Proses"
              ? "bg-orange-100 text-orange-500"
              : row.status == "di terima"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          } px-2 capitalize py-0.5 font-medium text-xs rounded-xl`}
        >
          {row.status !== "belum di Proses"
            ? row.status === "di terima"
              ? "Di Terima"
              : "Di Tolak"
            : "Belum Di Proses"}
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="felx gap-1">
          <SmallBtn
            type="link"
            url={"detail/" + row.id}
            text="Lihat"
            bg="bg-blue-500"
            color="text-white"
          />
        </div>
      ),
    },
    {
      name: "Proses",
      cell: (row) => <DropUp id={row.id} />,
      button: true,
    },
  ];

  const { isLoading, data } = useFetch(`students`);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.fullname &&
      item.fullname.toLowerCase().includes(filterText.toLowerCase())
  );

  function convertArrayOfObjectsToCSV(array) {
    let result;

    const body = array?.map((e) => {
      return {
        Nama_Lengkap: e?.fullname,
        jurusan: e?.jurusan?.title,
        asal_sekolah: e?.asal_sekolah?.previous_school,
        status:
          e?.status === "di terima"
            ? "Lulus"
            : e?.status === "belum di Proses"
            ? "Belum Di Proses"
            : "Tidak Lulus",
      };
    });

    const head = data?.map((e) => {
      return {
        Nama_Lengkap: e?.fullname,
        jurusan: e?.jurusan?.title,
        asal_sekolah: e?.asal_sekolah?.previous_school,
        status: e?.status,
      };
    });

    const columnDelimiter = ";";
    const lineDelimiter = "\n";
    const keys = Object.keys(head[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    body?.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });
    return result;
  }

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

  const [dataExpor, setDataExpor] = useState(null);

  useEffect(() => {
    setDataExpor(data);
  }, [data]);

  const handleStatusChange = (event) => {
    const value = event?.target?.value;
    if (value !== "All") {
      const filtered = data?.filter((e) => e.status === value);
      setDataExpor(filtered);
    } else {
      setDataExpor(data);
    }
  };

  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );

  return (
    <div className=" pt-5 px-5 shadow-primary bg-white  w-full">
      <div className="w-max">
        <h1 className="font-medium text-lg">Data Pendaftaran</h1>
        <p className="text-sm">List-List Data Pendaftaran</p>
        <span>
          <AddButton isActive={true} name={`pendaftaran/${id}`} url={``} />
        </span>
      </div>

      <DataTable
        progressPending={isLoading}
        customStyles={customStyles}
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        actions={actionsMemo}
        subHeaderAlign="left"
        persistTableHead
        fixedHeader
        fixedHeaderScrollHeight="500px"
      />
    </div>
  );
}

export default TablePendaftaran;
